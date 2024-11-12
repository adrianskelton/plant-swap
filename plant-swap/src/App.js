import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch

import logoWhite from './assets/logowhite.png';  // Light mode logo
import logoBlack from './assets/logoblack.png';  // Dark mode logo

// Import Register and Login components
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [plants, setPlants] = useState([]);
  const [location, setLocation] = useState('Stockholm');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [logo, setLogo] = useState(logoWhite);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/plants?location=${location}`)
      .then(response => setPlants(response.data))
      .catch(error => console.error(error));

    if (theme === 'dark') {
      setLogo(logoBlack);
    } else {
      setLogo(logoWhite);
    }
  }, [location, theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>  
      <div className={theme}>
        {/* Navbar */}
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
          <Navbar.Brand href="/">
  <img
    src={logo}
    alt="Plant Swap Logo"
    style={{
      width: '100%',
      height: 'auto',
      maxWidth: '400px',  // Set max width to prevent the logo from growing too large
    }}
  />
</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Button variant="outline-dark" onClick={toggleTheme}>
                  {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content */}
        <Container className="mt-5 pt-5" style={{ paddingTop: '190px' }}>
        <Routes>  {/* Use Routes instead of Switch */}
            <Route path="/" element={<div>
              <h1>Plant Swap Community</h1>
              <p>Find plants to swap near you!</p>

              {/* Location Input */}
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="mr-sm-2"
                />
                <Button variant="outline-success" onClick={() => setLocation(location)}>
                  Search
                </Button>
              </Form>

              {/* Plant List */}
              <ul className="mt-3">
                {plants.map((plant, index) => (
                  <li key={index}>
                    <strong>{plant.name}</strong>: {plant.description}
                  </li>
                ))}
              </ul>
            </div>} />
            
            {/* Register Route */}
            <Route path="/register" element={<Register />} />

            {/* Login Route */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
