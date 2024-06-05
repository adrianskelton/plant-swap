import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import logo from './assets/logowhite.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Cafes from './components/Cafes/Cafes';
import LoginRegister from './LoginRegister';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Plant Swap Logo"
            className="d-inline-block align-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
  <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">About Us</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/cafes">Cafe's</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/login">Login / Register</Link>
  </li>
</ul>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h2>Welcome to Plant Swap Community</h2>
            <p>
              We are a community of plant lovers who come together to exchange
              plants, tips, and gardening advice. Members often meet at our
              affiliated cafes to swap plants and connect with other plant
              enthusiasts.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={homerightImage}
              alt="Home Right Image"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h2>About Us</h2>
            <p>Learn more about our mission, vision, and values.</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h2>Upcoming Events</h2>
            <p>Stay tuned for our upcoming plant swap events and meetups!</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h2>Get Involved</h2>
            <p>
              Join our community to start swapping plants and connecting with
              other plant enthusiasts.
            </p>
          </div>
        </div>
      </div>
      <footer className="text-center mt-4">
        <p>&copy; 2024 Plant Swap Community. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
