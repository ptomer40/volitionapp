import './trainingcontainer.css'; 
import { useRef, useState } from 'react';
import frankfinn from './images/image.png';
import springboot from './images/springboot.png';
import mern from './images/image.png';
import TrainingEnquiryForm from './TrainingEnquiryForm'; // Import the form

function Training() {
  const scrollRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedSyllabus, setSelectedSyllabus] = useState('');

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  const courses = [
    {
      img: frankfinn,
      title:'Java Full Stack Training',
      syllabus:'JavaFsd.pdf',
      more: '/training/java-fullstack'
    },
    {
      img: springboot,
      title: 'Springboot and Microservices',
      syllabus:'springmicroservices.pdf',
      more: '/trainings/java-fullstack'
    },
    {
      img: mern,
      title: 'MERN Stack Training',
      syllabus:'Mernstack.pdf',
      more: '/training/java-fullstack'
    },
    {
      img: frankfinn,
      title: 'OOPs using java 8',
      syllabus:'OOPs using Java 8.pdf',
      more: '/training/advanced-java'
    },
    {
      img: springboot,
      title: 'PL/SQL',
      syllabus:'plsql.pdf',
      more: '/training/spring-security'
    },
  ];

 const handleDownloadClick = (syllabusPath) => {
  const fileName = syllabusPath.split('/').pop(); // Extract just the file name
  setSelectedSyllabus(fileName);
  setShowForm(true);
};

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
                <button
                  className="download-btn"
                  onClick={() => handleDownloadClick(course.syllabus)}
                >
                  Download Syllabus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-buttons">
          <button onClick={() => scroll(-300)}>&#9664;</button>
          <button onClick={() => scroll(300)}>&#9654;</button>
        </div>
      </div>

    {showForm && (
  <div className="modal-overlay">
    <div className="modal-content">
      <TrainingEnquiryForm
        syllabusPath={selectedSyllabus}
        onClose={() => setShowForm(false)}
      />
    </div>
  </div>
)}


      <div className="explore-btn-wrapper">
        <a href="/zen-class/" className="explore-btn">
          Explore All Programs
        </a>
      </div>
    </div>
  );
}

export default Training;
