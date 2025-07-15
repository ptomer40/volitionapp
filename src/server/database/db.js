const mysql = require('mysql2');
const dotenv = require('dotenv');
console.log("before connfig in db.js")

dotenv.config();
console.log("after connfig in db.js")
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'volitionsphere',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

module.exports = db;
