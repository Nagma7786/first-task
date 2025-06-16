import React, { useState } from 'react';
import '../styles/form.css';

const Login = ({ onForgotClick, onBackClick }) => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data", user);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />

      <button type="submit">Login</button>

      {/* Back Button and Forgot Password Link */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button
          type="button"
          onClick={onBackClick}
          style={{
            padding: '4px 10px',
            marginRight: '40px',
            backgroundColor: 'gray',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ← Back
        </button>

        <span
          onClick={onForgotClick}
          style={{
            color: '#1976D2',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Forgot Password?
        </span>
      </div>
    </form>
  );
};

export default Login;
