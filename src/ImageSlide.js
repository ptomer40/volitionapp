import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './ImageSlide.css';  // Custom CSS for additional styling
import training from './images/trainingweb.jpeg';
import consultancy from './images/staffingweb.jpeg';


const ImageSlide = () => {
    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -70; // Adjust this value based on your header height
            const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="image-slide-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={training}  // Update with the path to your image
                        alt="First slide"
                    />
                    <Carousel.Caption className="custom-caption">
                        <Button variant="primary" onClick={() => handleScrollToSection('training-section')} className="custom-button">More Details</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={consultancy}  // Update with the path to your image
                        alt="Second slide"
                    />
                </Carousel.Item>
         
          <Carousel.Item>
                    <video
                        className="d-block w-100 carousel-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false} // set to true if you want video controls
                    >
                        <source src='/sample.mp4' type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <Carousel.Caption>
                        <h5>Watch Our Overview</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ImageSlide;
