const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'quanticsols_booking',
    password: 'bookingadmin123',
    database: 'quanticsols_carpro',
    port: 3306
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;