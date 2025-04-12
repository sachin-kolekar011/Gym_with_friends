import React from "react";
import '../styles/Footer.css'

const Footer = () =>{
    return (
        <>
        <footer className="footer">
        <div className="container">
          <div className="footer-column">
            <h3>VISHWA GYM</h3>
            <p>Your transformation is our passion</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
             
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Krish Thamke</p>
            <p>9738164646</p>
            <p>Pune, Maharashtra</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Vishwa Gym. All Rights Reserved.</p>
        </div>
      </footer>
        </>
    )
}

export default Footer ;