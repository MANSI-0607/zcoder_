import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import bellicon from '../assets/notification.svg';
import profileicon from '../assets/profile.svg';
 import { Link } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
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

//   const navlinkstyle=({isActive})=>{
//     return{
//        textDecoration:isActive?"none":"underline",
//        color:isActive?"black":"grey"
//     };
// };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className='header'>
        <Navbar.Brand href="#home">
          <img src={logo} className='logoimg' alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='navhead'>
            <Nav className="me-auto">
             <Nav.Link 
                 as={Link}
                 to="/" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#Explore" 
                className={activeLink === 'explore' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('explore')}
              >
                Explore
              </Nav.Link>
              <Nav.Link 
                as={Link}
                to="addquestion" 
                className={activeLink === 'addquestion' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('addquestion')}
              >
                Add Question
              </Nav.Link>
              <Nav.Link 
                href="#MyPost" 
                className={activeLink === 'mypost' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('mypost')}
              >
                My Stack
              </Nav.Link>
              <Nav.Link 
                href="#CodeLive" 
                className={activeLink === 'codelive' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('codelive')}
              >
                Code Live
              </Nav.Link>
              {/* <div className="navbar new">
            <NavLink style={navlinkstyle}to={'/'}><h2>Home</h2></NavLink>
            <NavLink style={navlinkstyle} to={'/explore'}><h2>Explore</h2></NavLink>
            <NavLink style={navlinkstyle} to={'/addquestion'}><h2>Add Question</h2></NavLink>
            <NavLink style={navlinkstyle} to={'/mystack'}><h2>My Stack</h2></NavLink>
            <NavLink style={navlinkstyle} to={'/codelive'}><h2>Code Live</h2></NavLink>
            
            </div> */}
            </Nav>

            <span className='navbar-text'>
              <div className='bell-icon'>
                <a href="#"><img src={bellicon} alt="notification" /></a>
              </div>
              <div className='profile-icon'>
                <a href="#"><img src={profileicon} alt="profile" /></a>
              </div>
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
