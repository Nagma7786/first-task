const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('✅ Middleware loaded');

const userRoutes = require('./routes/user.routes');
console.log('✅ userRoutes imported');

app.use('/api/users', userRoutes);
console.log('✅ userRoutes mounted at /api/users');

module.exports = app;
