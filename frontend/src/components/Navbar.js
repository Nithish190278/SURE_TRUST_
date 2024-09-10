import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaGithub, FaHome } from 'react-icons/fa';
import logo from '../assests/logo.jpg'; 
import { Button } from '@mui/material';
import Logout from './Logout';
import './styles.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const buttonStyle = {
        margin: '0 8px',
        fontWeight: '600',
        fontSize: '0.875rem',
        textTransform: 'none',
    };

    return (
        <>
            
            <header>
                <div className="container">
                    <div className="logo-container">
                        <img src={logo} alt="Sure Trust Logo" className="logo" />
                        <div className="company-name">
                            <span className="brand-name">SURE Trust</span>
                            <p className="pp">Social Service Initiative</p>
                        </div>
                    </div>
                    <nav>
                        <ul id="nav-menu">
                            <li>
                                <Link to="/">
                                    <FaHome /> 
                                </Link>
                            </li>
                            <li>
                                <a href="https://github.com/sure-trust" target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> 
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-right">
                        {!isLoggedIn ? (
                            <>
                                <Button
                                    variant="contained"
                                    style={{ ...buttonStyle, backgroundColor: '#f44336' }}
                                    color="error"
                                    component={Link}
                                    to="/login"
                                >
                                    Login
                                </Button>

                                <Button
                                    variant="contained"
                                    style={{ ...buttonStyle, backgroundColor: '#4caf50' }}
                                    color="success"
                                    component={Link}
                                    to="/signup"
                                >
                                    Signup
                                </Button>
                            </>
                        ) : (
                            <Logout setIsLoggedIn={setIsLoggedIn} />
                        )}
                        <div className="dropdown">
                            <button className="menu-button" onClick={toggleDropdown}><FaBars /></button>
                            {dropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/about">About</Link>
                                    <Link to="/contact">Contact</Link>
                                    <Link to="/courses">Courses</Link>
                                    <Link to="/iery">IERY</Link>
                                    <Link to="/services">Services for Community</Link>
                                    <Link to="/lifeskills">Lifeskills Training Program</Link>
                                    <Link to="/webdev">Website Developers</Link>
                                    <Link to="/photo-gallery">Photo Gallery</Link>
                                    <Link to="/video-gallery">Video Gallery</Link>
                                    <Link to="/documents">Documents</Link>
                                    <Link to="/alumni">Alumni</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
