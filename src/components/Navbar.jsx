import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Add custom styles for the navbar
import Footer from './Footer';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">The Gym</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/find-gym">Find the Gym</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
    
    </>

    
  );
};

export default Navbar;
