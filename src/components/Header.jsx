import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import bellicon from "../assets/notification.svg";
import profileicon from "../assets/profile.svg";
import "./Header.css"; 
import { CurrentUserContext } from "../App";

const Header = () => {
  const { currentUsername } = useContext(CurrentUserContext);
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
      <h2>ZCODER</h2>
      <nav className="nav-links">
        <NavLink to={`/${currentUsername}/explore`} activeClassName="active">
          Explore
        </NavLink>
        <NavLink to={`/${currentUsername}/uploadQuestion`} activeClassName="active">
          Add Question
        </NavLink>
        <NavLink to={`/${currentUsername}/mystack`} activeClassName="active">
          My Stack
        </NavLink>
        <NavLink to={`/${currentUsername}/codelive`} activeClassName="active">
          Code Live
        </NavLink>
      </nav>
      <div className="icon-links">
        <NavLink to={`/${currentUsername}/notifications`} className="icon-link">
          <img src={bellicon} alt="Notifications" />
        </NavLink>
        <NavLink to={`/${currentUsername}/home`} className="icon-link">
          <img src="/profile.jpg" alt="Profile" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
