import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar, Nav } from 'react-bootstrap';
import logo from './images/logo.png';
import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import EnquiryForm from './EnquiryForm';
function HeaderMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);
    const navigate = useNavigate();


const handleOpenEnquiryModal = () => {
  setShowEnquiryModal(true);
};

const handleCloseEnquiryModal = () => {
  setShowEnquiryModal(false);
};
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -70;
            const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
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
                    <img className="navbar-logo" src={logo} alt="Company Logo" />
                    <h6 className="mb-0 ml-2">VolitionSphere IT Services</h6>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
                <Navbar.Collapse id="basic-navbar-nav" className={`menu-collapse ${menuOpen ? 'show' : ''}`}>
                    <Nav className="ml-auto align-items-center">
  <Nav.Link onClick={handleOpenEnquiryModal} className="nav-link-custom attractive-link">
  Live Coding Classes
</Nav.Link>

<Modal show={showEnquiryModal} onHide={handleCloseEnquiryModal} centered>
  <Modal.Header closeButton>
    <Modal.Title>Please Enter mobile number for OTP on WhatsApp:</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <EnquiryForm />
  </Modal.Body>
</Modal>
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
                        <Nav.Link onClick={handleSignUpClick} className="btn btn-parrot btn-lg">
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default HeaderMenu;
