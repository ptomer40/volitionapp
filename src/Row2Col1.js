import React from 'react';
import './App.css'; // Import your CSS file for styling

import step1 from './images/step1.jpg';
import step2 from './images/step2.jpeg';
import step3 from './images/step3.jpeg';
import step4 from './images/step4.jpeg';
function Row2Col1() {
    return (
        <div className="staffing-process-container">
            <h3 style={{ textAlign: 'center' }}>Staffing Solution Process</h3>
            <div className="horizontal-scroll-container">
                <div className="step">
                    <img src={ step1} alt="Step 1" />
                    <p>Understand Client Requirement</p>
                </div>
                <div className="step">
                    <img src={step2} alt="Step 2" />
                    <p>Candidate Screening and Interview</p>
                </div>
                <div className="step">
                    <img src={step3} alt="Step 3" />
                    <p>Candidate Shortlisting</p>
                </div>

                <div className="step">
                    <img src={step4} alt="Step 4" />
                    <p>Hire Candidate</p>
                </div>
            </div>
        </div>
    );
}

export default Row2Col1;
