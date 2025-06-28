import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './images/logo.png';
import './Navbar.css';
import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';

function HeaderMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -70; // Adjust this value based on your header height
            const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
            setMenuOpen(false); // Close the menu after scrolling
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='home'>
       <Navbar expand="md" className={`fixed-top navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`} expanded={menuOpen}>
    <Navbar.Brand href="#">
        <img className="navbar-logo" src={logo}  alt="Company Logo" />
        <h6 className="mb-0 ml-2">VolitionSphere IT Services</h6>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
    <Navbar.Collapse id="basic-navbar-nav" className={`menu-collapse ${menuOpen ? 'show' : ''}`}>
        <Nav className="ml-auto align-items-center">
             <Nav.Link onClick={() => handleScrollToSection('training-section')} className="nav-link-custom attractive-link">Live Coding Classes</Nav.Link>
           
            <Nav.Link onClick={() => handleScrollToSection('training-section')} className="nav-link-custom">Training</Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection('home')} className="nav-link-custom">Consultancy Services</Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection('clients')} className="nav-link-custom">Our Clients</Nav.Link>
           
            <Nav.Link onClick={() => handleScrollToSection('aboutus-section')} className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link onClick={() => handleScrollToSection('contact-us-section')} className="nav-link-custom">Contact Us</Nav.Link>
        </Nav>
       <Nav className="ml-md-3 mt-3 mt-md-0 login-signup">
        <Nav.Link onClick={handleLoginClick} className="btn btn-outline-primary btn-sm mr-2">
          Login
        </Nav.Link>
        <Nav.Link
          onClick={() => console.log('Sign Up clicked')} // Replace with actual action
          className="btn btn-parrot btn-lg"
        >
          Sign Up
        </Nav.Link>
      </Nav>

      {showLogin && <LoginForm onClose={handleCloseLogin} />}
    </Navbar.Collapse>
</Navbar>

        </div>
    );
}

export default HeaderMenu;
