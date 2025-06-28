import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Enquiry = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col xs="12" md="12" lg="12">
                    <div className="enquiry">
                        
                        <Row>
                            <Col xs="12" md="8">
                                <p className="animate" style={{ marginLeft: 80 }}> <strong>Call for Vendor Empanelment and Training:+91-7428191397</strong></p>
                            </Col>
                            <Col xs="12" md="4">
                                <p ><strong>Email:</strong>info@volitionsphereitservices.net</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Enquiry;
