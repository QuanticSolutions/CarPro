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
const cookieParser = require('cookie-parser');
const data = require('./routes/data');
require('dotenv').config();
const MySQLStore = require("express-mysql-session")(session);

// const dbOptions = {
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'carpro',
//     port: 3306
// };

const dbOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306
};

const allowedOrigins = [
  "https://carsfinderpro.com",
  "https://admin.carsfinderpro.com",
  "https://www.admin.carsfinderpro.com",
  "https://www.carsfinderpro.com",
  "https://www.carpro.quanticsols.com",
  "http://localhost:5173",
  "http://localhost:5174",
];

const sessionStore = new MySQLStore(dbOptions);
app.use(cookieParser());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(
  session({
    key: 'carpro_session_id',
    secret: process.env.SESSION_SECRET,
    resave: false,
    store: sessionStore,
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
