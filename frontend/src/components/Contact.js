import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin } from 'react-icons/fa'; 

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
       
        setSubmitted(true);
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Contact</h2>
                <p>📞 9440045717</p>
                <p>📞 8309228027</p>
                <p>💬 +919440045717</p>
                <p>✉️ suretrust2020@gmail.com</p>
                <p>Sreeguru towers, Second floor, Gopuram road, opp. Union bank of India, Puttaparthi, Andhra Pradesh 515134</p>
                <a href="link.js" target="_blank" rel="noopener noreferrer">
                    <img src={FaLinkedin } alt="LinkedIn" className="linkedin-icon" />
                </a>
            </div>
            <div className="contact-form">
                {submitted ? (
                    <p className="success-message">Successfully submitted. Thank you!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;
