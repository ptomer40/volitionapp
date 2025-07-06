import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './signup.css';
import signupImage from './images/springboot.png'; // Replace with your image

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Sign Up Data:', formData);
  };

  return (
    <Container fluid className="signup-page">
      <Row className="vh-100">
        {/* Left Column - Image */}
        <Col md={6} className="signup-image d-none d-md-flex align-items-center justify-content-center">
          <img src={signupImage} alt="Sign Up Visual" className="img-fluid" />
        </Col>

        {/* Right Column - Form */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
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

              <button type="submit">Register</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpForm;
