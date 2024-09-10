import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography, Alert } from "@mui/material";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/SignUp", { name, email, password })
            .then(result => {
                if (result.status === 201) {
                    setSuccessMessage("Signup successful! Redirecting to login...");
                    setTimeout(() => {
                        navigate("/login"); 
                    }, 3000);
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    window.alert("Email already exists. Please use a different email.");
                } else {
                    console.log(err);
                }
            });
    };

    const para = { fontSize: "1.1rem", marginTop: "1rem" };
    const paperStyle = { padding: "1.5rem", margin: "100px auto", borderRadius: "1rem", boxShadow: "10px 10px 10px" };
    const heading = { fontSize: "2.5rem", fontWeight: "600" };
    const row = { display: "flex", marginTop: "2rem" };
    const btnStyle = { marginTop: "2rem", fontSize: "1.2rem", fontWeight: "700", backgroundColor: "blue", borderRadius: "0.5rem" };

    return (
        <div>
            <Grid align="center" className="wrapper">
                <Paper style={paperStyle} sx={{
                    width: {
                        xs: '80vw', 
                        sm: '50vw', 
                        md: '40vw', 
                        lg: '30vw', 
                        xl: '20vw', 
                    },
                    height: {
                        lg: '70vh', 
                    }
                }}>
                    <Typography component="h1" variant="h5" style={heading}>SignUp</Typography>
                    <form onSubmit={handleSignUp}>
                        <TextField style={row} sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} fullWidth type="text" label="Enter Name" name="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                        <TextField style={row} sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} fullWidth label="Email" variant="outlined" type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        <TextField style={row} sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} fullWidth label="Password" variant="outlined" type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <Button style={btnStyle} variant="contained" type="submit">SignUp</Button>
                    </form>
                    {successMessage && (
                        <Alert severity="success" style={{ marginTop: "20px" }}>
                            {successMessage}
                        </Alert>
                    )}
                    <p style={para}>Already have an account?<Link href="/login"> Login</Link></p>
                </Paper>
            </Grid>
        </div>
    );
}

export default SignUp;
