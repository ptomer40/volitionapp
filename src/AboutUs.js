// JavaScript source code
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css';

function AboutUs() {
    return (
        <div id="aboutus-section">
        <Container fluid className="about-us-section">
            <Row>
                <Col>
                    <center><h2 className="about-us-title">About Us</h2></center>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="12" md="10" lg="8">
                    <p className="about-us-content">
                        Welcome to Volitionsphere IT Services, your premier destination for comprehensive IT solutions.
                        With a focus on excellence and innovation, we specialize in providing staffing services tailored
                        to both IT and non-IT sectors, ensuring that your organization has access to top-tier talent to drive success.
                        Additionally, we offer corporate technical training services in cutting-edge technologies such as Java Full Stack,
                        MERN Stack, MEAN Stack, Spring Boot, and Microservices, empowering your team with the knowledge and skills needed
                        to thrive in today's competitive landscape. We started the journey in 2019 from corporate training, in this model
                        we worked on hiring and deployment model. We are in association with Paytm, Mudra Portfolio, FrankFinn, IGT Solutions,
                        Ienergizer company, Scadea software solution as recruitment partners. Also, in website designing, our expert team of designers
                        and developers delivers exceptional website designing services, creating visually stunning and highly functional websites that make
                        a lasting impression. At Volitionsphere, we are committed to meeting your unique needs and exceeding your expectations. Let us be
                        your trusted partner on your journey to success in the digital age. The career aspirations of our candidates. </p>
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default AboutUs;
