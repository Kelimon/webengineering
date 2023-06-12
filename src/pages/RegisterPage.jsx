import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  AppBar,
  Grid
} from '@mui/material';
import "./../App.css";

import RegisterRequest from './../components/RegisterRequest';
import Header from "./../components/Header"
import { useNavigate } from 'react-router-dom';

function RegisterPage({setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [passwordNotEqual, setPasswordNotEqual] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {

    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmedPasswordChange = (e) => {
    setConfirmedPassword(e.target.value);
  };

  const handleRegister = () => {
    if(!(confirmedPassword==password)){
        setPasswordNotEqual(true);
        setPasswordInvalid(false);
        setEmailExists(false);
        return;
    }
    if(password.length <8){
        setPasswordInvalid(true);
        setPasswordNotEqual(false);
        setEmailExists(false);
        return;
    }
    RegisterRequest(email, password, setIsLoggedIn)
      .then((result) => {
        // Handle successful login
        console.log('Logged in:', result.data);
        navigate('/home');
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
        setEmailExists(true);
        setPasswordNotEqual(false);
        setPasswordInvalid(false);

      });
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (<>
  <AppBar position="fixed" style={{ backgroundColor: "black" }}>
    <Header/>
    </AppBar>
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Paper elevation={10} sx={{ padding: '2rem', borderRadius: '1rem' }}>
          <Typography variant="h4" gutterBottom>
            Register
          </Typography>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmedPassword}
            onChange={handleConfirmedPasswordChange}
            fullWidth
            margin="normal"
          />
          {passwordNotEqual && <Typography color={"red"}>Passwords are not the same.</Typography>}
          {passwordInvalid && <Typography color={"red"}>Password must be atleast 8 characters.</Typography>}
          {emailExists && <Typography color={"red"}>There is already a User with the given email.</Typography>}
          <Button
            variant="contained"
            color="primary"
            onClick={handleRegister}
            fullWidth
            size="large"
            sx={{ marginTop: '1rem' }}
          >
            Register
          </Button>
          
          <Grid container spacing={0} sx={{ marginTop: '1rem' }}>
              <Grid item xs={12} textAlign="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  size="large"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
        </Paper>
      </Box>
    </Container>
    </>
  );
}

export default RegisterPage;
