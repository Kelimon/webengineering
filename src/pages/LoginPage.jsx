import React, { useState } from 'react';
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
import LoginRequest from './../components/LoginRequest';
import Header from "./../components/Header"
import { useNavigate } from 'react-router-dom';

function LoginPage({setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credentialsInvalid, setCredentialsInvalid] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    
    LoginRequest(email, password, setIsLoggedIn)
      .then((result) => {
        // Handle successful login
        console.log('Logged in:', result.data);
        navigate('/home');
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
        setCredentialsInvalid(true);
      });
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (<>
  <AppBar position="fixed" style={{ backgroundColor: "black" }}>
    <Header/>
    </AppBar>
    <Container minWidth="lg" >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        width={1200}
        
      >
        <Paper elevation={10} sx={{ padding: '2rem', borderRadius: '1rem' }}>
          <Typography variant="h4" gutterBottom>
            Login
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
          {credentialsInvalid && <Typography color={"red"} sx={{ minWidth: '100%' }}>Email or password incorrect.</Typography>}
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
            size="large"
            sx={{ marginTop: '1rem' }}
          >
            Login
          </Button>
          
          <Grid container spacing={0} sx={{ marginTop: '1rem' }}>
              <Grid item xs={12} textAlign="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleRegister}
                  size="large"
                >
                  Register
                </Button>
              </Grid>
            </Grid>
        </Paper>
      </Box>
    </Container>
    </>
  );
}

export default LoginPage;
