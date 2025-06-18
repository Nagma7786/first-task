const db = require('../config/db'); // make sure db.js exists in config folder

exports.findByEmail = (email, callback) => {
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]); // return user if found
  });
};

exports.createUser = (user, callback) => {
  const { name, email, password } = user;
  db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    callback
  );
};
