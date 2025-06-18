const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

console.log('✅ user.routes.js file loaded');

// Register
router.post('/register', userController.registerUser);

// Login
router.post('/login', userController.loginUser);

module.exports = router;
