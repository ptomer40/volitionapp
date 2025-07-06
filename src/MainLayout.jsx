import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import HeaderMenu from './HeaderMenu';
import ClientList from './ClientList';
import AboutUs from './AboutUs';
import Footer from './Footer';
import ImageSlide from './ImageSlide';
import frankfinn from './images/frankfinn.jpg';
import mudra from './images/mudra.png';
import scadea from './images/scadea.png';
import ienergizer from './images/ienergizer.png';
import paytm from './images/paytm.png';
import sdglobal from './images/sdglobal.png';
import maxlife from './images/maxlife.png';
import sourcefuse from './images/sourcefuse.png';
import optimum from './images/optimum.png';
import ScrolltotopButton from './ScrolltotopButton';
import Trainer from './Trainer';
import LMS from './Lms';
import CorporateTraining from './CorporateTraining';
import FreeResource from './FreeResource';
import ConsultanceLink from './ConsultanceLink';
import Training from './Training';

function MainLayout() {
    const images = [frankfinn, mudra, scadea, ienergizer, paytm, sdglobal, optimum, maxlife, sourcefuse];

    return (
        <Container className="main" fluid>
            <Row className="align-items-center no-gutters">
                <Col xs="12"><HeaderMenu /></Col>
            </Row>
            <Row className="align-items-center no-gutters image-slide-row">
                <Col xs="12"><ImageSlide /></Col>
            </Row>
            <Row className="align-items-center no-gutters" style={{ backgroundColor: 'white' }}>
                <Col><ClientList images={images} /></Col>
            </Row>
            <Row className="align-items-center no-gutters" style={{ backgroundColor: 'white' }}>
                <Col><Training /></Col>
            </Row>
            <Row className="align-items-center no-gutters" style={{ backgroundColor: 'white' }}>
                <Col><Trainer /></Col>
            </Row>
            <Row className="align-items-center no-gutters" style={{ backgroundColor: 'white' }}>
                <Col><LMS /></Col>
            </Row>
            <Row className="align-items-center no-gutters" style={{ backgroundColor: 'white' }}>
                <Col><CorporateTraining /></Col>
            </Row>
            <Row className="align-items-center no-gutters" style={{ backgroundColor: 'white' }}>
                <Col><FreeResource /></Col>
            </Row>
            <Row className="align-items-center no-gutters" style={{ backgroundColor: '#ded6d5' }}>
                <Col><ConsultanceLink /></Col>
            </Row>
            <Row className="align-items-center no-gutters" style={{ backgroundColor: '#ded6d5' }}>
                <Col><AboutUs /></Col>
            </Row>
            <Row className="align-items-center no-gutters">
                <Col><Footer /><ScrolltotopButton /></Col>
            </Row>
        </Container>
    );
}

export default MainLayout;
