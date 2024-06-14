import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import ParticlesComponent from "../components/Particles";

const SignUp = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async () => {
    // Add validation here if needed

    if (newUser.password !== newUser.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert("Sign up successful!");
        navigate("/login");
      } else {
        const data = await response.json();
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      alert("Sign up failed. Please try again later.");
    }
  };

  return (
    <div className="sign-up">
      <ParticlesComponent className="particles-js" />
      <div className="sign-up-container">
        <h2>Sign Up</h2>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          className="sign-up-input"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          className="sign-up-input"
        />
        <label>Username</label>
        <input
          type="text"
          name="userName"
          value={newUser.userName}
          onChange={handleChange}
          className="sign-up-input"
        />
        <label>Set Password</label>
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          className="sign-up-input"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={newUser.confirmPassword}
          onChange={handleChange}
          className="sign-up-input"
        />
        <button className="sign-up-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
      <div className="existing-account">
        Already have an account?{" "}
        <button className="login-button" onClick={handleLoginClick}>
          Login Here
        </button>
      </div>
    </div>
  );
};

export default SignUp;
