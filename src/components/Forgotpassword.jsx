import React, { useState } from 'react';
import '../styles/form.css';

const ForgotPassword = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hello, I forgot my password. My number is ${phone}`);
    window.open(`https://wa.me/91${phone}?text=${msg}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Forgot Password</h2>
      <input
        type="tel"
        name="phone"
        placeholder="Enter WhatsApp number"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Contact on WhatsApp</button>
    </form>
  );
};

export default ForgotPassword;
