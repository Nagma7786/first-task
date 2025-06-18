// controllers/user.controller.js
const twilio = require('twilio');
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Dummy in-memory user store
const users = [];

// Register user
exports.registerUser = (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const existingUser = users.find(u => u.phone === phone);
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  users.push({ name, email, password, phone });
  res.status(200).json({ message: 'User registered successfully' });
};

// Login user
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  res.status(200).json({
    message: 'Login successful',
    user: { name: user.name, email: user.email },
  });
};

// Forgot password (send via WhatsApp)
exports.forgotPassword = (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ error: 'Phone number is required' });
  }

  const user = users.find(u => u.phone === phone);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const message = `Hi ${user.name}, your password is: ${user.password}`;

  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${phone}`,
    })
    .then(() => {
      res.status(200).json({ message: 'Password sent via WhatsApp' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to send WhatsApp message' });
    });
};
