

import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Sign_Up from './pages/Sign_Up';
import Forgot_Password from './pages/Forgot_Password';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
         
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign_Up />} />
            <Route path="/forgot-password" element={<Forgot_Password />} />      
            <Route path="/dashboard" element={<Dashboard />} />       
        </Routes>
        <Footer />
    </BrowserRouter>
    
  );
};

export default App;
