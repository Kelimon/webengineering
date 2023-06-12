import axios from 'axios';
import { useNavigate } from 'react-router-dom';

async function LoginRequest(username, password, setIsLoggedIn) {

  try {
    const response = await axios.post('http://localhost:5000/login', { username, password });
    // Check if the login was successful
    if (response.data.success) {
      // Log the user in if the login was successful
      setIsLoggedIn(true);
      console.log("loginrequest succes")
      return response;
    } else {
      // If the login wasn't successful, throw an error
      throw new Error(response.data.message);
    }

    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  export default LoginRequest;