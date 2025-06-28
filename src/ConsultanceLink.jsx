import React from 'react';
import './consultanceLink.css';

function ConsultanceLink() {
  return (
    <section className="consultancy-section">
      <div className="consultancy-container">
        <h2 className="consultancy-title">End-to-End Recruitment Consultancy</h2>
        <p className="consultancy-subtitle">
          CodeStack’s consultancy service bridges talent to top companies. We specialize in both <strong>IT</strong> and <strong>Non-IT recruitment</strong>.
        </p>

        <ul className="consultancy-points">
          <li>Permanent and Contractual Hiring</li>
          <li>Tailored Talent Acquisition for Startups & Enterprises</li>
          <li>Technical Assessments & HR Screening</li>
          <li>Dedicated Recruitment Support Team</li>
        </ul>

        <div className="consultancy-btn-container">
          <a href="/consultancy" className="consultancy-btn">Explore Consultancy</a>
        </div>
      </div>
    </section>
  );
}

export default ConsultanceLink;
