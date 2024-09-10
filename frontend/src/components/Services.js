import React from 'react';
import './Services.css';

const ServicesForCommunity = () => {
  return (
    <div className="services-section">
      <h1 className="section-title">Services For Community</h1>
      <div className="services-container">
        <div className="service-item">
          <i className="fas fa-seedling"></i>
          <span>Plantation</span>
        </div>
        <div className="service-item">
          <i className="fas fa-tint"></i>
          <span>Blood Donations</span>
        </div>
        <div className="service-item">
          <i className="fas fa-user-friends"></i>
          <span>Service To Senior Citizens</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesForCommunity;
