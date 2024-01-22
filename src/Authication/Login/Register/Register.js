import React, { useState } from 'react';
import './Register.css';

const Register = () => {
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [error, setError] = useState('');

 const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
   
 };

 return (
    <div className="register-container">
      <h1>Registration</h1>

      <button className="google-button">Continue with Google</button>

      <form onSubmit={handleRegister}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Password Confirmation</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember"> </label>
        </div>

        <button type="submit">Register</button>
      </form>

      {error && <p>{error}</p>}

      <p>
        Already have an account? <span className="login-link">Login</span>
      </p>
    </div>
 );
};

export default Register;