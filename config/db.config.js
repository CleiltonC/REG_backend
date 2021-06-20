const mysql = require("mysql");

const db = mysql.createConnection({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "password",
  database: "rep_db",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = db;
