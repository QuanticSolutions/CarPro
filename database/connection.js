const mysql = require('mysql2');
require('dotenv').config();

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'carpro',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

const pool = mysql.createPool({
    host: 'carpro.c340q84yan5b.eu-north-1.rds.amazonaws.com',
    user: 'root',
    password: 'carprodb1234',
    database: 'carpro',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;