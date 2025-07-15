import React, { useRef } from 'react';
import './trainer.css';
import prashant from './images/prashanttrainer.jpg'
import ashish from './images/ashish trainer (2).jpeg'
import aditya from './images/aditya trainer.jpeg'
import lavi from './images/lavi.png'

const trainers = [
  {
    name: 'Prashant Tomer',
    profileImg: prashant,
    companyLogo: 'Samsung Display,FranConnect',
    roleAfter: 'Java FullStack Developer Trainer',
  },
  {
    name: 'Ashish Bajpai',
    profileImg: ashish,
    companyLogo: 'KSolves',
    
    roleAfter: 'Backend Developer Trainer, Docker',
  },
  {
    name: 'Aditya Kumar Jha',
    profileImg: aditya,
    companyLogo: 'Freelancer',
    
    roleAfter: 'UI/UX Developer Trainer'
  },
  {
    name: 'Kamini',
    profileImg: lavi,
    companyLogo: 'FreeLancer',
   
    roleAfter: 'English Communication Trainer',
  }
];

function Trainer() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  return (
    <div className="trainer-container">
      <h2 className="text-center mb-4">Our Expert Trainer</h2>

      <div className="trainer-scroll-area" ref={scrollRef}>
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <div className="card-header">
              <img className="bg-img" src="https://via.placeholder.com/400x300" alt="background" />
              <img className="profile-img" src={trainer.profileImg} alt="trainer" />
              <div className="trainer-name">{trainer.name}</div>
              <div className="trainer-name">{trainer.companyLogo}</div>
            </div>
            <div className="card-body">
              
             
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
