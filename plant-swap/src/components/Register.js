import React, { useState } from 'react';
import axios from 'axios';

const avatars = [
  '/avatars/avatar1.png',  
  '/avatars/avatar2.png',
  '/avatars/avatar3.png',
  '/avatars/avatar4.png',
  '/avatars/avatar5.png'
];

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    location: '',
    avatar: avatars[0], // Default avatar
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.username || !formData.email || !formData.password || !formData.location) {
      setErrorMessage('All fields are required!');
      return;
    }

    try {
      // Send data to the backend for registration
      const response = await axios.post('http://localhost:5000/register', formData);
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('An error occurred while registering. Please try again!');
      setSuccessMessage('');
    }
  };

  return (
    <div className="register-container">
      <h2>Register for Plant Swap</h2>
      
      {/* Show error or success messages */}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter your location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
        </div>

        <div>
          <h3>Select an Avatar</h3>
          <div className="avatar-selection">
            {avatars.map((avatar) => (
              <img
                key={avatar}
                src={avatar}  // Replace with the actual path to your avatars
                alt="avatar"
                onClick={() => setFormData({ ...formData, avatar })}
                style={{
                  border: formData.avatar === avatar ? '2px solid green' : 'none',
                  cursor: 'pointer',
                  width: '50px',
                  margin: '5px',
                }}
              />
            ))}
          </div>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
