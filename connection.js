const mysql = require('mysql2');

require('dotenv').config();

let user = process.env.DB_USER;
let password = process.env.DB_PASSWORD;


var db = mysql.createConnection(
    {
    host: 'localhost',
    user: user,
    password: password,
    database: 'tracker_db',
});

module.exports = db;




