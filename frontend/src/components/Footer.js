import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; 
import logo from '../assests/logo.jpg';  
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo-container">
            <img src={logo} alt="Sure Trust Logo" className="footer-logo" />
            <div className="footer-company-name">
              <span className="footer-brand-name">SURE Trust</span>
              <p className="footer-pp">Social Service Initiative</p>
            </div>
          </div>
        </div>
        <div className="footer-center">
          <span>SURE Trust © 2024</span>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/company/suretrust-ruralyouth/?_l=en_US" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
