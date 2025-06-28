import React, { useState } from 'react';
import './signup.css';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., send to backend or Firebase)
    console.log('Sign Up Data:', formData);
  };

  return (
    <div className="signupFormContainer">
      <form className="signupForm" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          id="mobile"
          required
          pattern="[0-9]{10}"
          value={formData.mobile}
          onChange={handleChange}
        />

        <label htmlFor="password">Create Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUpForm;
