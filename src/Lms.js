import React from 'react';
import './lms.css';

const features = [
  {
    title: 'CodeKata',
    image: 'https://via.placeholder.com/1020x594?text=CodeKata',
    description: [
      'Interactive platform for programming practice.',
      '1500+ coding problems curated by top industry experts.',
      'Showcase skills for job recruitment.',
      'Crack coding interviews effectively.',
    ],
    link: '/code-kata',
  },
  {
    title: 'WebKata',
    image: 'https://via.placeholder.com/1020x594?text=WebKata',
    description: [
      'Beginner-friendly web development practice.',
      'Modern HTML, CSS, JavaScript problem sets.',
      'Hands-on assignments to accelerate skills.',
    ],
    link: '/webkata',
  },
  {
    title: 'SQLKata',
    image: 'https://via.placeholder.com/1020x594?text=SQLKata',
    description: [
      'Master SQL and relational databases.',
      'Improve query writing and optimization.',
      'Tackle real-world data management challenges.',
    ],
    link: '/sqlkata',
  },
  {
    title: 'Debugging',
    image: 'https://via.placeholder.com/1020x594?text=Debugging',
    description: [
      'Curated debugging exercises.',
      'Performance affects job recommendations.',
      'Sharpen real-time error solving.',
    ],
    link: '/debugging',
  },
  {
    title: 'IDE',
    image: 'https://via.placeholder.com/1020x594?text=IDE',
    description: [
      'CodeStack IDE for 20+ programming languages.',
      'Write, test, debug all in one place.',
      'Built-in debugger and execution tools.',
    ],
    link: '/ide',
  },
  {
    title: 'Rewards',
    image: 'https://via.placeholder.com/1020x594?text=Rewards',
    description: [
      'Earn points via coding and referrals.',
      'Redeem rewards like vouchers and gadgets.',
    ],
    link: '/rewards',
  },
  {
    title: 'Referral',
    image: 'https://via.placeholder.com/1020x594?text=Referral',
    description: [
      'Simple referral system for learners.',
      'Earn points for every successful invite.',
    ],
    link: '/referral',
  },
  {
    title: 'Forum',
    image: 'https://via.placeholder.com/1020x594?text=Forum',
    description: [
      'Tech community discussions and support.',
      'Queries answered within 48 hours.',
    ],
    link: 'https://forum.codestack.in/',
  },
];

function Lms() {
  return (
    <div className="lms-container">
      <h2 className="lms-title">Learn. Practice. Earn. Have Fun! — with CodeStack 🚀</h2>

      {/* Mobile Accordion View */}
      <div className="lms-mobile">
        {features.map((item, index) => (
          <details className="accordion" key={index}>
            <summary>{item.title}</summary>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <ul>
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a href={item.link} className="btn">Explore {item.title}</a>
          </details>
        ))}
      </div>

      {/* Desktop Tab View */}
      <div className="lms-desktop">
        <div className="tabs">
          {features.map((item, i) => (
            <input
              type="radio"
              name="tabs"
              id={`tab-${i}`}
              key={i}
              defaultChecked={i === 0}
            />
          ))}

          <div className="tab-labels">
            {features.map((item, i) => (
              <label htmlFor={`tab-${i}`} key={i} className="tab">
                {item.title}
              </label>
            ))}
          </div>

          <div className="tab-content">
            {features.map((item, i) => (
              <div className="content" key={i}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.description.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                  <a href={item.link} className="btn">Explore {item.title}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lms;
