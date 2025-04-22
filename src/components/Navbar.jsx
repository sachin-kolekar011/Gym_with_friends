// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css'; // Add custom styles for the navbar
// import Footer from './Footer';

// const Navbar = () => {
//   return (
//     <>
//     <nav className="navbar">
//       <div className="navbar-logo">The Gym</div>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/find-gym">Find the Gym</Link></li>
//         <li><Link to="/membership">Membership</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/signup">Sign Up</Link></li>
//         <li><Link to="/admin/login">Admin Portal</Link></li>
//       </ul>
//     </nav>
    
//     </>

    
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For regular users
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // For admin users

  // Check login status on component mount (mocking localStorage for now)
  useEffect(() => {
    const userToken = localStorage.getItem('userToken'); // Token for regular users
    const adminToken = localStorage.getItem('adminToken'); // Token for admins

    setIsLoggedIn(!!userToken); // If user token exists, set to logged in
    setIsAdminLoggedIn(!!adminToken); // If admin token exists, set admin login
  }, []);

  // Logout handlers
  const handleUserLogout = () => {
    localStorage.removeItem('userToken'); // Remove user token
    setIsLoggedIn(false);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken'); // Remove admin token
    setIsAdminLoggedIn(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">The Gym</div>
        <ul className="navbar-links">
          {/* Common Links */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/find-gym">Find the Gym</Link></li>
          <li><Link to="/membership">Membership</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/admin/login">Admin Portal</Link></li>

          {/* Links for Regular Users */}
          {!isLoggedIn && !isAdminLoggedIn && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}

          {isLoggedIn && !isAdminLoggedIn && (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><button onClick={handleUserLogout} className="logout-button">Logout</button></li>
            </>
          )}

          {/* Links for Admin Users */}
          {isAdminLoggedIn && (
            <>
              <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
              <li><Link to="/admin/manage">Manage Users</Link></li>
              <li><button onClick={handleAdminLogout} className="logout-button">Admin Logout</button></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;