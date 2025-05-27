const express = require("express");
const db = require("../database/connection");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const StreamChat = require("stream-chat").StreamChat;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const AppleStrategy = require('passport-apple');
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;
const serverClient = new StreamChat(apiKey, apiSecret);

router.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ results });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = results[0];
        res.json({ user });
    });
});

router.post('/signup', async (req, res) => {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const streamUserId = `${email.split('@')[0]}`;

    const query = 'INSERT INTO users (fullname, email, phone, password, stream_id) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, email, phone, hashedPassword, streamUserId], async (err, result) => {
        if (err) return res.status(500).json({ message: err.sqlMessage });
        await serverClient.upsertUser({ id: streamUserId, name, email });
        res.status(201).json({ message: 'User created successfully' });
    });
});

router.post('/users', async (req, res) => {
    const { name, email, role, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (fullname, email, role, password) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, role, hashedPassword], async (err, result) => {
        if (err) return res.status(500).json({ message: err.sqlMessage });
        res.status(201).json({ message: 'User created successfully' });
    });
});

const registerPushToken = async (userId, firebaseToken) => {
    try {
        await serverClient.upsertUser({
            id: userId,
            firebase_messaging_tokens: [{ token: firebaseToken, provider: "firebase" }],
        });
    } catch (error) {
        console.error("Error registering FCM token:", error);
    }
};


router.post('/login', async (req, res) => {
    const { email, phone, password, firebaseToken } = req.body;
    let query;
    let identifier;
    if (email) {
        query = 'SELECT * FROM users WHERE email = ?';
        identifier = email;
    } else if (phone) {
        query = 'SELECT * FROM users WHERE phone = ?';
        identifier = phone;
    } else {
        return res.status(400).json({ message: 'Email or phone number is required' });
    }
    
    db.query(query, [identifier], async (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        
        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ 
            id: user.id, 
            email: user.email,
            phone: user.phone 
        }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        const stream_token = serverClient.createToken(user.stream_id);
        
        if (firebaseToken) {
            await registerPushToken(user.stream_id, firebaseToken);
            const updateQuery = "UPDATE users SET firebase_token = ? WHERE id = ?";
            db.query(updateQuery, [firebaseToken, user.id], (updateErr) => {
                if (updateErr) console.error("Error saving Firebase token:", updateErr);
            });
        }
        
        res.json({ 
            token, 
            user, 
            stream_token, 
            stream_id: user.stream_id 
        });
    });
});

router.put("/reset", async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    try {
        const findUserSql = "SELECT id FROM users WHERE email=?";
        db.query(findUserSql, [email], (err, userResult) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (userResult.length === 0) {
                return res.status(200).json({ message: "User not found" });
            }
            const userId = userResult[0].id;
            const values = [hashedPassword, userId];
            const updateSql = `UPDATE users SET password=? WHERE id=?`;
            db.query(updateSql, values, (err, result) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "Failed to update password" });
                }
                res.json({ 
                    message: "Password updated successfully",
                    userId: userId 
                });
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    const { fullname, date_of_birth, gender, about, email, password, phone, currentPassword, newPassword, googleId } = req.body;
    let updateFields = `fullname=?, date_of_birth=?, gender=?, about=?, email=?, phone=?`;
    let values = [fullname, date_of_birth, gender, about, email, phone];
    if (newPassword) {
        const match = await bcrypt.compare(currentPassword, password);
        if (!match) {
            return res.status(401).json({ message: "Current Password Is Incorrect" })
        }
        updateFields += `, password=?`;
        values.push(await bcrypt.hash(newPassword, 10))
    }
    if(googleId || googleId == "") {
        updateFields += `, google_id=NULL`;
    }
    values.push(req.params.id)
    const sql = `UPDATE users SET ${updateFields} WHERE id=?`;

    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User updated successfully" });
    });
});

router.delete("/:id", (req, res) => {
    db.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User deleted successfully" });
    });
});

const handleSocialLogin = (profile, done) => {
    const email = profile.emails[0].value;
    const query = 'SELECT * FROM users WHERE email = ?';
    const googleId = profile.id;
    db.query(query, [email], (err, results) => {
        if (err) return done(err);
        if (results.length > 0){
            const user = results[0];
            if (!user.google_id) {
                const updateQuery = 'UPDATE users SET google_id = ? WHERE id = ?';
                db.query(updateQuery, [googleId, user.id], async (err) => {
                    if (err) return done(err);
                    console.log("Google account linked to existing user.");
                });
            }
            return done(null, user);
        } 

        const streamUserId = `${email.split('@')[0]}_${googleId}`;
        const insertQuery = 'INSERT INTO users (fullname, email, stream_id, google_id) VALUES (?, ?, ?, ?)';
        db.query(insertQuery, [`${email.split('@')[0]}`, email, streamUserId, googleId], async (err, result) => {
            if (err) return done(err);
            await serverClient.upsertUser({ id: streamUserId, name: `${email.split('@')[0]}`, email });
            db.query('SELECT * FROM users WHERE id = ?', [result.insertId], (err, users) => {
                if (err) return done(err);
                if (users.length === 0) return done(new Error('User not found after creation'));
                done(null, users[0]);
            });
        });
    });
};

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'https://api.carsfinderpro.com/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    handleSocialLogin(profile, done);
}));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'emails', 'fullname']
}, (accessToken, refreshToken, profile, done) => {
    handleSocialLogin(profile, done);
}));

passport.use(new AppleStrategy({
    clientID: process.env.APPLE_CLIENT_ID,
    teamID: process.env.APPLE_TEAM_ID,
    keyID: process.env.APPLE_KEY_ID,
    privateKey: process.env.APPLE_PRIVATE_KEY,
    callbackURL: '/auth/apple/callback'
}, (accessToken, refreshToken, profile, done) => {
    handleSocialLogin(profile, done);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const query = "SELECT * FROM users WHERE id = ?";
    db.query(query, [id], (err, results) => {
        console.log(err)
        if (err) return done(err);
        done(null, results[0]);
    });
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/social/google', passport.authenticate('google', { scope: ['email'] }));
router.get('/apple', passport.authenticate('apple', { scope: ['email'] }));

router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        if (!req.user) {
            return res.status(401).json({ message: "User not authenticated" });
        }
        const token = jwt.sign({ id: req.user.id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.redirect(`https://carsfinderpro.com/auth-handler?token=${token}&user_id=${req.user.id}&stream_id=${req.user.stream_id}&stream_token=${req.user.stream_token}`);
    }
);

router.get('/apple/callback',
    passport.authenticate('apple', { failureRedirect: '/login' }),
    (req, res) => {
        if (!req.user) {
            return res.status(401).json({ message: "User not authenticated" });
        }
        const token = jwt.sign({ id: req.user.id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.redirect(`https://carsfinderpro.com/auth-handler?token=${token}`);
    }
);

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        if (!req.user) {
            return res.status(401).json({ message: "User not authenticated" });
        }
        const token = jwt.sign({ id: req.user.id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log(req.user)
        const stream_token = serverClient.createToken(req.user.stream_id);
        res.redirect(`https://carsfinderpro.com/auth-handler?token=${token}&user_id=${req.user.id}&stream_id=${req.user.stream_id}&stream_token=${stream_token}`);
    }
);

let otpStore = {};

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

router.post("/send-otp", (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    otpStore[email] = { otp, expires: Date.now() + 300000 };

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP is ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            return res.status(500).json({ error: "Failed to send email" });
        }
        res.json({ message: "OTP sent successfully" });
    });
});

router.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;
    const record = otpStore[email];

    if (!record || record.otp !== otp || record.expires < Date.now()) {
        return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    delete otpStore[email];
    res.json({ message: "OTP verified successfully" });
});

module.exports = router;

