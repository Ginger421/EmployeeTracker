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







// // Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // TODO: Add MySQL password here
//     password: 'Tadgage#2627',
//     database: 'tracker_db'  
//   },
//   console.log(`Connected to the tracker_db.`)
// );

// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);
