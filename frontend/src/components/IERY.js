import React from 'react';
import './IERY.css';

const IERY = () => {
  return (
    <div className="iery-container">
      <section className="intro-section">
        <div className="intro-text">
          <h2>SURE Trust - IERY</h2>
          <h1>Innovation & Entrepreneurship Hub for Educated Rural Youth</h1>
          <p>
            Gain hands-on experience through executive-led internships which are open to 3rd/4th year B.Tech, MCA, MBA, and PG/Ph.D. students.
          </p>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YTu-pnGVgJQ"
            title="SURE Trust - IERY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="projects-section">
        <h1>Internship Projects at SURE Trust</h1>
        <div className="projects-grid">
          <div className="project-item">Android App Development</div>
          <div className="project-item">Embedded Systems & IOT</div>
          <div className="project-item">Autocad & Solidworks</div>
          <div className="project-item">Java</div>
          <div className="project-item">Python</div>
          <div className="project-item">VLSI Designing</div>
          <div className="project-item">Microsoft Power BI</div>
          <div className="project-item">Data Science & Data Analytics</div>
          <div className="project-item">Cyber Security & Ethical Hacking</div>
          <div className="project-item">Web Development</div>
        </div>
      </section>
    </div>
  );
};

export default IERY;

