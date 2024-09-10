import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import img1 from '../assests/vlsi.png';
import img2 from '../assests/autocad.jpg';
import img3 from '../assests/farmer.jpg';
import img4 from '../assests/datascience.webp';
import img5 from '../assests/hospital.jpg';
import img6 from '../assests/IOT.jpg';
import img7 from '../assests/python.webp';
import img8 from '../assests/web.jpg';
import mainImage from '../assests/main.png'; 

const stats = [
  { label: 'Students Undergoing Training', value: 300, color: '#FFF4E1' }, 
  { label: 'Students Completed Training', value: 1000, color: '#FFC1C1' }, 
  { label: 'Students Placed', value: 300, color: '#FFD8B1' }, 
  { label: 'Courses', value: 28, color: '#F5FFFA' }, 
  { label: 'Ongoing Batches', value: 25, color: '#E6FFE6' }, 
  { label: 'Trainers', value: 135, color: '#FFD1B3' }, 
];

const projects = [
  { id: 1, image: img1, heading: 'VLSI Design', subheading: 'AXI to APB bridge -- Project Completed' },
  { id: 2, image: img2, heading: 'Auto CAD AND SOLID WORKS', subheading: 'AUTONOMOUS GUIDED FORKLIFT VEHICLE FOR WAREHOUSES - Project Complete' },
  { id: 3, image: img3, heading: 'ANDROID APP DEVELOPMENT', subheading: 'Building Farmer Connect App - Project Completed' },
  { id: 4, image: img4, heading: 'Project Data Science & Data Analytics', subheading: 'Unlocking Insights: SURE Trust Student Data Analytics-Project Completed ' },
  { id: 5, image: img5, heading: 'JAVA', subheading: 'Hospital Management System Project - Project Completed' },
  { id: 6, image: img6, heading: 'EMBEDDED SYSTEMS & IOT', subheading: 'IoT Gateway -Projects Completed' },
  { id: 7, image: img7, heading: 'Python', subheading: 'IERY Outreach Project - Completed' },
  { id: 8, image: img8, heading: 'WEB DEVELOPMENT', subheading: 'Building a website newly started Super Speciality Hospital - Project Completed' }
];

const additionalInfo = [
  {
    title: 'SURE Trust signed up on the NGO-DARPAN and a registered entity on MCA portal for Undertaking CSR Activities',
    content: 'The NGO-DARPAN is a platform that provides space for interface between VOs/NGOs and key Government Ministries / Departments / Government Bodies. SURE Trust is registered with the MCA portal with the registration id: CSR00039792, and is eligible to undertake CSR activities.'
  },
  {
    title: 'SURE Trust Internships are accessible on AICTE Portal',
    content: 'SURE Trust offers free online: 4 months training for skill upgradation and 2 months full-time internship after the training, 4 months training for skill upgradation and 4 months part-time internship after the training.'
  },
  {
    title: 'SURE Trust is NGO Partner with TATA Group of Companies',
    content: 'TATA Proengage team opens the volunteering opportunities in SURE Trust to all their employees across the globe, once in six months. Employees from different levels of management volunteer to support SURE Trust in various capacities as Trainers, Mentors, Advisors, and so on.'
  },
  {
    title: 'Vision of SURE Trust',
    content: 'Enhancing the employability of educated unemployed rural youth through “Human values-based skill up-gradation in emerging technologies, with no cost to students."'
  }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const counters = document.querySelectorAll('.stat-value');
    const speed = 1000;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target + '+';
        }
      };

      updateCount();
    });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + projects.length) % projects.length);
  };


  const visibleProjects = [
    projects[(currentIndex + 0) % projects.length],
    projects[(currentIndex + 1) % projects.length],
  ];

  return (
    <div className="home-page">
  

      <div className="home-container">
        <div className="left-content">
          <div className="text-background">
            <h1 style={{ fontSize: '66px' }}>SureTrust</h1>
            <h6 style={{ fontSize: '40px' }}>Skill Upgradation for <br />Rural-youth<br /> Empowerment</h6>
          </div>
          <div className="button-container">
            <Link to="/courses">
              <button className="btn get-started-btn">Explore Courses</button>
            </Link>
            <Link to="/uploadproject" >
              <button className="btn explore-courses-btn">Upload Project</button>
            </Link>
          </div>
        </div>
        <div className="right-image-container">
          <img src={mainImage} alt="Main Visual" className="right-image" />
        </div>
      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-box"
            style={{ backgroundColor: stat.color }}
          >
            <div className="stat-label">
              <h3>{stat.label}</h3>
              <p className="stat-value" data-target={stat.value}>0</p>
            </div>
          </div>
        ))}
      </div>

      <div className="internship-projects">
        <h2>Internship Projects</h2>
      </div>

      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handlePrev}>&lt;</button>
        <div className="carousel-projects">
          {visibleProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.heading} className="project-image" />
              <h3>{project.heading}</h3>
              <p>{project.subheading}</p>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>&gt;</button>
      </div>

      <div className="additional-info-section">
        {additionalInfo.map((info, index) => (
          <div key={index} className="info-box">
            <h3>{info.title}</h3>
            <p>{info.content}</p>
          </div>
        ))}
      </div>

      <div className="homepage">
        <div className="collaborators-grid">
      
        </div>

        <div className="services-section">
          <h2>Collaborators</h2>
          <div className="services-grid">
            <a href="https://www.astrazeneca.com/" className="service-item">
              <p>AstraZeneca</p>
            </a>
            <a href="https://redapricot.io/company" className="service-item">
              <p>Redapricot</p>
            </a>
            <a href="https://check.in/" className="service-item">
              <p>Check.in</p>
            </a>
            <a href="https://www.lokibots.ai/" className="service-item">
              <p>Lokibots</p>
            </a>
            <a href="https://www.onusworks.com/" className="service-item">
              <p>Onusworks</p>
            </a>
            <a href="https://www.digitalocean.com/impact/nonprofits" className="service-item">
              <p>Digital Ocean</p>
            </a>
            <a href="https://www.tafe.com/" className="service-item">
              <p>TAFE</p>
            </a>
            <a href="https://www.tataengage.com/" className="service-item">
              <p>TATA Group of Companies</p>
            </a>
            <a href="https://atsuyatech.com/" className="service-item">
              <p>Atsuya Technologies</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
