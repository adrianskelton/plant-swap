import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import logoWhite from "./assets/logowhite.png";
import logoBlack from "./assets/logoblack.png";

import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

// Set Axios Defaults
const API_BASE_URL = "https://5000-adrianskelton-plantswap-awfmdgwadct.ws-eu116.gitpod.io";
axios.defaults.headers.common["Referrer-Policy"] = "no-referrer";
axios.defaults.withCredentials = true;

function App() {
  const [plants, setPlants] = useState([]);
  const [location, setLocation] = useState("Stockholm");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [logo, setLogo] = useState(logoWhite);
  const [user, setUser] = useState(null); // Track user data

  useEffect(() => {
    axios
      .get(`/api/plants?location=${location}`) // No need to include the base URL here
      .then((response) => setPlants(response.data))
      .catch((error) => console.error(error));
  }, [location]);

  useEffect(() => {
    setLogo(theme === "dark" ? logoBlack : logoWhite);

    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/user`); // Base URL is already set
        setUser(response.data);
      } catch {
        setUser(null);
      }
    };

    fetchUser();
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Router>
      <div className={theme}>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                alt="Plant Swap Logo"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "400px",
                }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {!user ? (
                  <>
                    <Nav.Link as={Link} to="/register">
                      Register
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/dashboard">
                      Dashboard
                    </Nav.Link>
                    <Button
                      variant="outline-danger"
                      onClick={() => setUser(null)}
                    >
                      Logout
                    </Button>
                  </>
                )}
                <Button variant="outline-dark" onClick={toggleTheme}>
                  {theme === "light"
                    ? "Switch to Dark Mode"
                    : "Switch to Light Mode"}
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-7">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>Welcome {user?.name || "Guest"}!</h1>
                  <p>A growing community of people who love plants.</p>
                  <p>Find plants to swap near you!</p>

                  <Form>
                    <FormControl
                      type="text"
                      placeholder="Enter your location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>

                  <ul className="mt-2">
                    {plants.map((plant, index) => (
                      <li key={index}>
                        <strong>{plant.name}</strong>: {plant.description}
                      </li>
                    ))}
                  </ul>
                </div>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
