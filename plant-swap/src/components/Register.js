import React, { useState, useEffect } from "react";
import axios from "axios";

// Example avatars
const avatars = [
  "/avatars/avatar1.png",
  "/avatars/avatar2.png",
  "/avatars/avatar3.png",
  "/avatars/avatar4.png",
  "/avatars/avatar5.png",
];

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    location: "", // Store the city name here
    avatar: avatars[0], // Default avatar
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [cities, setCities] = useState([]); // Store cities list
  const [loading, setLoading] = useState(true);

  // Fetch cities data from the public folder
  useEffect(() => {
    const fetchCities = async () => {
      try {
        // Now fetching the JSON from the public folder
        const response = await axios.get("/se.json");
        setCities(response.data); // Assuming your JSON data is an array of cities
        setLoading(false);
      } catch (error) {
        setErrorMessage("Failed to load cities. Please try again.");
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.location
    ) {
      setErrorMessage("All fields are required!");
      return;
    }

    try {
      // Send data to the backend for registration
      const response = await axios.post(
        "http://localhost:5000/register",
        formData
      );
      setSuccessMessage(response.data.message);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("An error occurred while registering. Please try again!");
      setSuccessMessage("");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-2">Register for Plant Swap</h2>

      {/* Show error or success messages */}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        {/* Location Selection - Dropdown */}
        <div className="mb-3">
          <label className="form-label">Select Location</label>
          {loading ? (
            <p>Loading cities...</p>
          ) : (
            <select
              className="form-control"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              required
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city.city} value={city.city}>
                  {city.city}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="mb-3">
          <h5>Select an Avatar</h5>
          <div className="d-flex flex-wrap">
            {avatars.map((avatar) => (
              <img
                key={avatar}
                src={avatar}
                alt="avatar"
                onClick={() => setFormData({ ...formData, avatar })}
                className={`img-fluid m-2 ${
                  formData.avatar === avatar
                    ? "border border-2 border-success"
                    : ""
                }`}
                style={{
                  width: "60px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
