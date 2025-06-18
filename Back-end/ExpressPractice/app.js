const express = require('express');
const app = express();
require('dotenv').config(); // Load .env config

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ User-related Routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// ✅ OTP Routes for sending email OTP
const otpRoutes = require('./routes/otp.routes');
app.use('/api/otp', otpRoutes);

module.exports = app;
