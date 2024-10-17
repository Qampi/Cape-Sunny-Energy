import React from 'react';
import { Link } from 'react-router-dom'; 

const Login = () => {
  return (
    <>
        <div className="signup-container">
            <section className="heading">
                <h5>Login</h5>
            </section>
            <form className="sign_in" id="loginForm" method="post">
                <label>Username:</label>
                <input type="email" name="email" placeholder="Email" id="email" required />
                {/* <span id="errorMessage">Error</span> */}
                <label>Password:</label>
                <input type="password" name="password" placeholder="Password" id="password" minLength="6" maxLength="20" required />
                {/* <span id="errorMessage">Error</span> */}
                <button className="login-button" type="submit">Sign in</button>
                <div className="form-links">
                    <Link to="/forgot-password">Forgot password?</Link>
                    <Link to="/signup">Not a member, Register</Link>
                </div>
            </form>
        </div>
    </>
  );
};

export default Login;