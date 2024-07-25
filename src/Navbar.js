import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from './logo.jpeg'; // Adjust the path according to your project structure

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="features" smooth={true} duration={500}>Explore</Link></li>
        <li><Link to="our-work" smooth={true} duration={500}>Our Work</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
