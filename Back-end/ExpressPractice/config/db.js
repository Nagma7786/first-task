// config/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'practice',
});

db.connect((err) => {
  if (err) {
    console.error('❌ DB connection error:', err.message);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

module.exports = db;
