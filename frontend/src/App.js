import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import IERY from './components/IERY';
import Services from './components/Services';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UploadProject from './components/UploadProject';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/iery" element={<IERY />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/uploadproject" element={<UploadProject />} />

            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
