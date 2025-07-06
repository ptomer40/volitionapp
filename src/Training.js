import './trainingcontainer.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import frankfinn from './images/image.png';
import springboot from './images/springboot.png';
import mern from './images/image.png';

function Training() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  const courses = [
    {
      img: frankfinn,
      title: 'Java Full Stack Training',
      syllabus: '/syllabus/java-fullstack',
      more: '/training/java-fullstack'
    },
    {
      img: springboot,
      title: 'Springboot and Microservices',
      syllabus: '/syllabus/java-fullstack',
      more: '/training/java-fullstack'
    },
    {
      img: mern,
      title: 'MERN Stack Training',
      syllabus: '/syllabus/java-fullstack',
      more: '/training/java-fullstack'
    },
    {
      img: frankfinn,
      title: 'Advanced Java & Hibernate',
      syllabus: '/syllabus/advanced-java',
      more: '/training/advanced-java'
    },
    {
      img: springboot,
      title: 'Spring Security & JWT',
      syllabus: '/syllabus/spring-security',
      more: '/training/spring-security'
    },
  ];

  return (
    <div className="trainingcontainer" id="training-section">
      <h2 className="text-center mt-5">Live Classes</h2>

      <div className="course-section">
        <div className="scroll-area" ref={scrollRef}>
          {courses.map((course, index) => (
            <div className="modern-card" key={index}>
              <img
                src={course.img}
                alt={course.title}
                className="modern-card-img"
                width="310"
                height="140"
              />
              <div className="modern-card-content">
                <h3>{course.title}</h3>
                <p className="languages">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 0 20" />
                  </svg>
                  Tamil, English, Hindi & Telugu
                </p>
               
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-buttons">
          <button onClick={() => scroll(-300)}>&#9664;</button>
          <button onClick={() => scroll(300)}>&#9654;</button>
        </div>
      </div>
    <div className="explore-btn-wrapper">
  <a
    href="/zen-class/"
    className="explore-btn"
  >
    Explore All Programs
  </a>
</div>

    </div>
  );
}

export default Training;
