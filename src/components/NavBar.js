// src/pages/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css";
import Logo from "../assets/Logo.png";
const NavBar = () => {
  return (
    <nav>
      <ul>
      <img src={Logo} id="logo" alt="logo"/>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Service</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      
        <li style={{ float: 'right' }}><Link to="/signup" id="sign-up">Sign up</Link></li>
        <li style={{ float: 'right' }}><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;