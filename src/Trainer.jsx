import React, { useRef } from 'react';
import './trainer.css';

const trainers = [
  {
    name: 'Padmini Kadhirvel',
    profileImg: 'https://via.placeholder.com/150',
    companyLogo: 'https://via.placeholder.com/100x40',
    roleBefore: 'Online Support Associate',
    roleAfter: 'Automation Testing Engineer',
  },
  {
    name: 'Arun Raj',
    profileImg: 'https://via.placeholder.com/150',
    companyLogo: 'https://via.placeholder.com/100x40',
    roleBefore: 'Customer Support',
    roleAfter: 'Backend Developer',
  },
  {
    name: 'Sowmya Lakshmi',
    profileImg: 'https://via.placeholder.com/150',
    companyLogo: 'https://via.placeholder.com/100x40',
    roleBefore: 'College Student',
    roleAfter: 'Full Stack Developer',
  },
  {
    name: 'Rahul Dev',
    profileImg: 'https://via.placeholder.com/150',
    companyLogo: 'https://via.placeholder.com/100x40',
    roleBefore: 'Testing Intern',
    roleAfter: 'QA Automation Engineer',
  }
];

function Trainer() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  return (
    <div className="trainer-container">
      <h2 className="text-center mb-4">Our Learners' Success</h2>

      <div className="trainer-scroll-area" ref={scrollRef}>
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <div className="card-header">
              <img className="bg-img" src="https://via.placeholder.com/400x300" alt="background" />
              <img className="profile-img" src={trainer.profileImg} alt="trainer" />
              <div className="trainer-name">{trainer.name}</div>
              <img className="company-logo" src={trainer.companyLogo} alt="company logo" />
            </div>
            <div className="card-body">
              <div className="role-box">{trainer.roleBefore}</div>
              <div className="timeline">
                <span className="timeline-line"></span>
                <div className="timeline-dot"></div>
                <div className="timeline-label">After GUVI</div>
              </div>
              <div className="role-box success-role">{trainer.roleAfter}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons below the cards */}
      <div className="trainer-scroll-buttons">
        <button className="scroll-btn" onClick={() => scroll(-300)}>&#9664;</button>
        <button className="scroll-btn" onClick={() => scroll(300)}>&#9654;</button>
      </div>
    </div>
  );
}

export default Trainer;
