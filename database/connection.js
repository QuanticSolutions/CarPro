const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'carpro',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     port: 3306,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

module.exports = pool;