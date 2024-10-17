import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";

function Footer() {
  const footerEmailInput = useRef(null);
  const footerSubmitBtn = useRef(null);

  useEffect(() => {
    const submitBtn = footerSubmitBtn.current;
    const emailInput = footerEmailInput.current;

    const handleClick = (event) => {
      event.preventDefault();
      const email = emailInput.value;

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email.match(emailPattern)) {
        alert('Thank you for subscribing!');
        localStorage.setItem('subscribedEmail', email);
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    };

    if (submitBtn) {
      submitBtn.addEventListener('click', handleClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (submitBtn) {
        submitBtn.removeEventListener('click', handleClick);
      }
    };
  }, []);

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
        <input type="email" ref={footerEmailInput} placeholder="Enter your email" name="email" />
        <button ref={footerSubmitBtn}>Submit</button>
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
