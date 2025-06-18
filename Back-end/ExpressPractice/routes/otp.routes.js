const express = require('express');
const router = express.Router();
const { sendOtp } = require('../controllers/otp.controller');

router.post('/send', sendOtp); // POST /api/otp/send

module.exports = router;
