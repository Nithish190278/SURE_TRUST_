import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Alert } from '@mui/material';

function Logout({ setIsLoggedIn }) {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            console.log('Attempting to log out...');
            const response = await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });
            console.log('Response status:', response.status); 

            if (response.status === 200) {
                setIsLoggedIn(false); 
                localStorage.removeItem('isLoggedIn'); 
                setErrorMessage('Logout successful! Redirecting to homepage...');
                console.log('Setting error message');

                setTimeout(() => {
                    navigate('/'); 
                }, 1000);
            } else {
                setErrorMessage('Logout failed. Please try again.');
                console.log('Logout failed'); 
            }
        } catch (error) {
            console.error('Error logging out:', error);
            setErrorMessage('An error occurred while logging out. Please try again.');
            console.log('Error occurred while logging out'); 
        }
    };

    const buttonStyle = { marginRight: '20px', fontSize: '1.2rem', fontWeight: '700', padding: '0.3rem 1.4rem' };

    return (
        <>
            <Button variant="contained" color="error" style={buttonStyle} onClick={handleLogout}>
                Logout
            </Button>
            {errorMessage && (
                <Alert severity="success" style={{ marginTop: '20px' }}>
                    {errorMessage}
                </Alert>
            )}
        </>
    );
}

export default Logout;
