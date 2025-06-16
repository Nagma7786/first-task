import React, { useState } from 'react';
import '../styles/form.css';

const Register = ({ onLoginClick }) => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data", user);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Register</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
      
      {/* Text link to Login */}
      <p style={{ textAlign: 'center' }}>
        Already have an account?{' '}
        <span className="link-text" onClick={onLoginClick}>
          Login
        </span>
      </p>
    </form>
  );
};

export default Register;
