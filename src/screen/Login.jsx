import React, { useState } from "react";
import './Login.css'; // Import the CSS file
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const Navigate=useNavigate();
  const handleSignup=()=>{
    Navigate("/")
  }

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <label>Username</label>
        <input type="text" className="login-input" />
        <label>Password</label>
        <div className="password-container">
          <input
            type={passwordVisible ? "text" : "password"}
            className="login-input"
          />
          {/* <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            className="eye-icon"
            onClick={togglePasswordVisibility}
          /> */}
        </div>
        <button className="login-button">Login</button>
        <div className="not-member">
          <h3>Not a member?</h3>
          <button className="signup-button" onClick={handleSignup}>Signup now</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
