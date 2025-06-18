// routes/user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Register
router.post('/register', userController.registerUser);

// Login
router.post('/login', userController.loginUser);

// Forgot Password via WhatsApp
router.post('/forgot-password', userController.forgotPassword);

module.exports = router;
