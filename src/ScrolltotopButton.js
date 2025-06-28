// JavaScript source code
import React, { useState, useEffect } from 'react';
import './ScrolltotopButton.css'; // Create this CSS file for styling the button

function ScrolltotopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible &&
                <div onClick={scrollToTop} className="scroll-button">
                    &#8679; {/* This is the upwards arrow character */}
                </div>
            }
        </div>
    );
}

export default ScrolltotopButton;
