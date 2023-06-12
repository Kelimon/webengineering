import axios from 'axios';


async function GetUserRequest(email, setEmail) {
  try {
    const response = await axios.get('http://localhost:5000/getuser', {
      params: {
        username: email
      }
    });
    // Check if the login was successful
    if (response.data.success) {
      // Log the user in if the login was successful
      setEmail(response.data.message)
      console.log("registerrequest succes")
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

  export default GetUserRequest;