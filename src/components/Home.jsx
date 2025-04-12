import React from 'react';
import '../styles/Home.css'; 
import Footer from './Footer';
// Add custom styles for the landing page

const Home = () => {
  return (
    <>
    <div className="home">
      <header className="home-header">
        <h1>Welcome to The Gym</h1>
        <p>Your fitness journey starts here!</p>
        <button className="cta-btn">Get Started</button>
      </header>
      <section className="services">
        <div className="service">
          <h3>Gym Facilities</h3>
          <p>Explore state-of-the-art equipment and fitness programs.</p>
        </div>
        <div className="service">
          <h3>Expert Trainers</h3>
          <p>Get personalized training with our professional trainers.</p>
        </div>
        <div className="service">
          <h3>Membership Plans</h3>
          <p>Find a plan that fits your needs and budget.</p>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
