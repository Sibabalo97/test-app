import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });

      console.log(response.data); 
      
    } catch (error) {
      console.error('Login failed', error.message);
      setError('Invalid username or password'); 
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button className="google-button">Continue with Google</button>

      <form>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <div className="password-input">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         
        </div>

        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>} 
      </form>

      <p>Don't have an account? <Link to="/register">Sign up</Link></p> 
    </div>
  );
}

export default Login;
