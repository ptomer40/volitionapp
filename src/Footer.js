import { Row, Col } from 'react-bootstrap';
import './Footer.css';
import ContactForm from './ContactForm'; // Import the ContactForm component

function Footer() {
    return (
        <div className="footer-container">
            <h2 style={{ margin: 'auto', color:'#4CAF50' }}>Contact-us</h2>
            <Row className="justify-content-around align-items-center">
                <Col xs={12} md={6} lg={6}>
                    <div className="footer-address" id="contact-us-section">
                        <address>
                            <h3>Registered Office</h3>
                            B-316, 1st Floor, New Panchwati,
                            <br />
                            Ghaziabad, Delhi NCR, India
                            <br />
                            Phone: +91-7428191397, 0120-3264832
                            <br />
                            Email: info@volitionsphereitservices.net
                        </address>
                        <address>
                            <h3>Corporate Office</h3>
                            Trident Reso, GH-6C, Sector-1,
                            <br />
                            Greater Noida, Delhi NCR, India
                        </address>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <ContactForm /> {/* Add the form component here */}
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
