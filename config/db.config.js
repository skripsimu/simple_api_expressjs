'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cyber2021',
  database: 'skripsimu'
});
dbConn.connect(function (err) {
  console.log("Database Connected!");
});
module.exports = dbConn;