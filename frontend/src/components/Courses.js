import React from 'react'; 

import './Courses.css';

const courses = [
  {
    title: 'Robotics Basic Applications - 6 months',
    description: 'B.Tech completed / B.Tech 3rd or 4th year',
  },
  {
    title: 'Cybersecurity & Ethical Hacking - 6 months',
    description: 'B.Tech completed / B.Tech 3rd or 4th year',
  },
  {
    title: 'Android App Development - 6 months',
    description: 'B.Tech completed / B.Tech 3rd or 4th year',
  },
  {
    title: 'Full Stack Web Development - 6 months',
    description: 'B.Tech completed / B.Tech 3rd or 4th year',
  },
  {
    title: 'Core Java Program - 6 months',
    description: 'B.Tech completed / B.Tech 3rd or 4th year',
  },
  {
    title: 'Python & ML Basic Applications - 6 months',
    description: 'B.Tech completed / B.Tech 3rd or 4th year',
  },
  {
    title: 'Digital Marketing Applications - 6 months',
    description: 'B.Tech completed / B.Tech 3rd or 4th year',
  },
  {
    title: 'Embedded Systems & IOT - 6 months',
    description: 'B.Tech completed / B.Tech 3rd or 4th year',
  },
  {
    title: 'Financial Modelling & Valuation - 6 months',
    description: 'B.Com, BBA, MBA, CFA and CA aspirants',
  },
  {
    title: 'SQL & PowerBi - 6 months',
    description: 'B.Tech completed / B.Tech 3rd or 4th year',
  },
  {
    title: '10-months Full Stack Data Science - 10 months',
    description: 'Basic knowledge of computer programming',
  },
  {
    title: 'PCB Designing - 6 months',
    description: 'B.Tech, ECE/EEE, 3rd year, 4th year pursuing and ...',
  },
];

const Courses = () => {
  return (
    
    <div className="courses-container">
      <h2>Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-actions">
              <button className="explore-btn">Explore</button>
              <button className="share-btn">Share</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="prev-btn">Prev</button>
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
};

export default Courses;
