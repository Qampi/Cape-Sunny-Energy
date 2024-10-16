// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";
function footer(){
  return (
    <footer>
      <div className="footer-banner">
        <img src={Logo}  id="logo" alt="logo" />
      </div>

      <div className="footer-links">
        <p>CSE</p>
        <Link to="/about">Company</Link>
        <Link to="/contact">Get in touch</Link>
        <Link to="/sign-up">Sign up</Link>
      </div>

      <div className="newsletter">
        <p>Let's connect:</p>
        <p><i>Subscribe to our newsletter</i></p>
        <input type="email" id="footerEmail" placeholder="Enter your email" name="email" />
        <button id="footerSubmit">Submit</button>
      </div>

      <div className="operating-hours">
        <p>Operating hours:</p>
        <p>Monday - Friday: 08:00 - 16:30.</p>
        <p>Saturdays: 08:30 - 12:30.</p>
        <p>Sundays & Public Holidays: Closed.</p>
      </div>
    </footer>
  );
};

export default footer;
