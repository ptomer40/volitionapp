// LoginForm.js
import React from 'react';
import './LoginForm.css'; // Keep your CSS

function LoginForm({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="loginFormContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Submit</button>
        <button type="button" onClick={onClose} className="close-btn">Close</button>
      </form>
    </div>
  );
}

export default LoginForm;
