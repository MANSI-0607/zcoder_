import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <h2>Sign Up</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="sign-up-input" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="sign-up-input" />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" className="sign-up-input" />
        <label htmlFor="password">Set Password</label>
        <input type="password" id="password" className="sign-up-input" />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          className="sign-up-input"
        />
        <button className="sign-up-button">Sign Up</button>
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
