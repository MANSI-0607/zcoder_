import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import bellicon from "../assets/notification.svg";
import profileicon from "../assets/profile.svg";
import "./Header.css"; // Make sure to import the CSS file

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <NavLink to={"/"} className="logo-link">
        <img src={logo} className="logoimg" alt="logo" />
      </NavLink>
      <nav className="nav-links">
        <NavLink to={"/explore"} activeClassName="active">
          Explore
        </NavLink>
        <NavLink to={"/addquestion"} activeClassName="active">
          Add Question
        </NavLink>
        <NavLink to={"/mystack"} activeClassName="active">
          My Stack
        </NavLink>
        <NavLink to={"/codelive"} activeClassName="active">
          Code Live
        </NavLink>
      </nav>
      <div className="icon-links">
        <NavLink to="/notifications" className="icon-link">
          <img src={bellicon} alt="notification" />
        </NavLink>
        <NavLink to="/" className="icon-link">
          <img src="profile.jpg" alt="profile" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
