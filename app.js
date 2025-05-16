const express = require("express");
const app = express();
const cors = require("cors");
const http = require('http');
const auth = require("./routes/auth");
const ads = require("./routes/ads");
const notifications = require("./routes/notifications");
const passport = require('passport');
const session = require("express-session");
const rent = require('./routes/rent')
const favs = require('./routes/favourites')
const files = require('./routes/files');
const stripe = require('./routes/stripe');
const data = require('./routes/data');
require('dotenv').config();
const MySQLStore = require('express-mysql-session')(session);


const sessionStore = new MySQLStore({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'carpro',
    port: 3306
});
  

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use("/auth", auth);
app.use("/ads", ads);
app.use("/notifications", notifications);
app.use("/files", files);
app.use("/rent", rent);
app.use("/favs", favs);
app.use("/payment", stripe);
app.use("/data", data);
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000);
