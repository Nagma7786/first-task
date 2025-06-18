// Dummy in-memory user store
const users = [];

console.log('✅ user.controller.js loaded');

exports.registerUser = (req, res) => {
  console.log('📥 registerUser endpoint hit');

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  users.push({ name, email, password });
  console.log('✅ Registered:', users);

  res.status(200).json({ message: 'User registered successfully' });
};

exports.loginUser = (req, res) => {
  console.log('📥 loginUser endpoint hit');

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
    user: {
      name: user.name,
      email: user.email,
    },
  });
};
