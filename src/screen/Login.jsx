import React, { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../App"; 
import ParticlesComponent2 from "../components/Particles2";

const Login = () => {
  const { setCurrentUsername } = useContext(CurrentUserContext); 
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
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        const username = data.userName;
        setCurrentUsername(username);
        localStorage.setItem("currentUsername", username);
        alert("Login successful!");

        try {
          const profileResponse = await fetch(`http://localhost:8000/home/${username}`);
          
          if (profileResponse.ok) {
            const profileData = await profileResponse.json();
            console.log("Profile data:", profileData);
            navigate(`/${username}/home`);
          } else {
            console.log("Profile not found, navigating to edit profile");
            navigate(`/${username}/edit-profile`);
          }
        } catch (error) {
          console.error("Error during profile check:", error);
          alert("Profile check failed. Please try again later.");
          navigate(`/${username}/edit-profile`);
        }
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
      <ParticlesComponent2 className="particles-js" />
      <div className="login-container">
        <h2>Login</h2>
        <label>Username</label>
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
