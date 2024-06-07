import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    console.log(user.username);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Login successful!");
        navigate("/edit-profile");
      } else {
        const data = await response.json();
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again later.");
    }
  };

  const handleSignup = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <label>username</label>
        <input
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
          className="login-input"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="login-input"
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <div className="not-member">
          <h3>Not a member?</h3>
          <button className="signup-button" onClick={handleSignup}>
            Signup now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
