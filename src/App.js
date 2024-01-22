import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link
import Register from '../src/Authication/Login/Register/Register';
import Login from '../src/Authication/Login/Login/Login';
import RegisterPage from '../src/Authication/Login/pages/RegisterPage';
import Dashboard from '../src/Dashboard/Dashboard'
import './App.css';

function App() {

  const styles = {
    container: {
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1ETBmdtrkmy3TZ4uy7IIK0mX1JBPslMxAA&usqp=CAU")', // Set the path to your image
      backgroundSize: 'cover', // Adjust the background size property as needed
      padding: '20px', // Add padding for better appearance
      backgroudcolor: 'black', // Set text color to be visible on the background
    },
    link: {
      color: 'green', // Set the link color to green
      textDecoration: 'underline', // Add underline for better visibility
    },
    
  };


  return (
    <div style={styles.container}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>

          {/* Add Link tags */}
          <nav>
            <ul>
              <li>
                <Link to="/Register" style={styles.link}>Register</Link>
              </li>
              <li>
                <Link to="/Login"style={styles.link}>Login</Link>
              </li>
              <li>
                <Link to="/RegisterPage" style={styles.link}>Register Page</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    </div>
  );
}

export default App;

