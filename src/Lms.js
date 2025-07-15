import React from 'react';
import './lms.css';
import fusionstack from './images/fusionstack.jpeg'
const features = [
  {
    title: 'FusionStack',
    image: fusionstack,
    description: [
      'Interactive platform for programming practice.',
      '100+ coding problems curated by top industry experts.',
      'Showcase your skills for placement.',
      'Crack coding interviews efficiently.',
    ],
    link: '/fusionstack',
  },
  {
    title: 'fusionstackforreact',
    image: fusionstack,
    description: [
      'Beginner-friendly web development practice.',
      'Modern react assessment',
      'Hands-on assignments to accelerate skills.',
    ],
    link: '/fusionstack',
  },
  {
    title: 'SQLusingfusionstack',
    image: fusionstack,
    description: [
      'Master SQL and relational databases.',
      'Improve query writing and optimization.',
      'Tackle real-world data management challenges.',
    ],
    link: '/fusionstack',
  },
 
  {
    title: 'IDE',
    image: fusionstack,
    description: [
      'CodeStack IDE for 10+ programming languages.',
      'Write, test, debug all in one place.',
      'Built-in debugger and execution tools.',
    ],
    link: '/ide',
  },
  
  {
    title: 'Forum',
    image: fusionstack,
    description: [
      'Tech community discussions and support.',
      'Queries answered within 48 hours.',
    ],
    link: '',
  },
];

function Lms() {
  return (
    <div className="lms-container">
      <h2 className="lms-title">Learn. Practice. Have Fun! — with FusionStack 🚀</h2>

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
