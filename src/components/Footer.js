
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";

function Footer() {
  
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(emailPattern)) {
    
      alert('Thank you for subscribing!');

      
      localStorage.setItem('subscribedEmail', email);

      setEmail('');
    } else {
      
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer>
      <div className="footer-banner">
        <img src={Logo} id="logo" alt="logo" />
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
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            id="footerEmail"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button id="footerSubmit" type="submit">Submit</button>
        </form>
      </div>

      <div className="operating-hours">
        <p>Operating hours:</p>
        <p>Monday - Friday: 08:00 - 16:30.</p>
        <p>Saturdays: 08:30 - 12:30.</p>
        <p>Sundays & Public Holidays: Closed.</p>
      </div>
    </footer>
  );
}

export default Footer;
