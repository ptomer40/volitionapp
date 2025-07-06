import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LoginForm.css';
import loginImage from './images/globe.gif'; // Replace with your image

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container fluid className="login-page">
      <Row className="vh-100">
        {/* Left column with image */}
        <Col md={6} className="login-image d-none d-md-flex align-items-center justify-content-center">
          <img src={loginImage} alt="Login Visual" className="img-fluid" />
        </Col>

        {/* Right column with form */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="loginFormContainer">
            <form className="loginForm" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />

              <button type="submit">Login</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
