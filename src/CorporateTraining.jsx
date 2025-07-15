import React from 'react';
import './corporateTraining.css';
import ContactForm from './ContactForm';
import { useState } from 'react';

function CorporateTraining() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="corporate-training-container">
      <header className="corporate-header">
        <h1>Corporate Training at Volitionsphere IT Services</h1>
        <p>Empowering your team with tailor-made tech training.</p>
      </header>

      <div className="corporate-highlights">
        <div className="highlight">
          <img src="/images/custom-training.svg" alt="Custom Training" />
          <h3>Customized Training</h3>
          <p>We tailor the curriculum to meet your business goals and team expertise.</p>
        </div>

        <div className="highlight">
          <img src="/images/assessment.svg" alt="Assessment" />
          <h3>In-depth Assessments</h3>
          <p>Measure progress through skill-based assessments and real-time evaluations.</p>
        </div>

        <div className="highlight">
          <img src="/images/assignment.svg" alt="Assignment" />
          <h3>Real-world Assignments</h3>
          <p>Practical tasks aligned with industry challenges to apply learning immediately.</p>
        </div>

        <div className="highlight">
          <img src="/images/insight-analysis.svg" alt="Insights" />
          <h3>Individual Insight Analysis</h3>
          <p>Detailed learner analytics to monitor growth and identify learning paths.</p>
        </div>
      </div>

      <div className="cta-section">
        <h2>Let’s Start Coding... </h2>
        <p>Partner with Volitionsphere IT Services to upskill your employees and future-proof your company.</p>
      <button className="btn-primary" onClick={openModal}>
        Request a Demo
      </button>
        {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <ContactForm />
          </div>
        </div>
      )}
      </div>
    </section>
  );
}

export default CorporateTraining;
