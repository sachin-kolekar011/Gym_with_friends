
import './App.css'
import Home from './components/Home'
import Movement from './components/Movement'
import UserTable from './components/UserTable'
import Modal from './components/Modal'
import MovementTable from './components/MovementTable'
import Login from './components/Login'
import Signup from './components/Signup'
import AuthPopup from './components/AuthPopup';
import './styles/Loginform.css'

import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import GymMembershipPage from './components/GymMembershipPage'
import GymLocator from './components/GymLocator'
import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Paper, Typography, Button, Grid, Card, CardContent, CardMedia, TextField, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, Email, Phone, LocationOn } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingHero from './components/LandingHero'


// for nav
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import MovementManagement from './components/MovementManagement'
import GymMembershipForm from './components/GymMembershipForm'
// import LandingHero from './components/LandingHero'

import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { Navigate } from 'react-router-dom'

import AdminNavbar from './components/AdminNavbar'


const isAdminLoggedIn = () => {
  // In a real app, you would check for a valid JWT in local storage or cookies
  return localStorage.getItem('isAdminLoggedIn') === 'true';
};

function App() {
  


return(
  <>
  {/* <AdminNavbar/> */}
  {/* <Movement/> */}
    
    {/* <MovementTable/> */}
    {/* <UserTable/> */}
{/* <MovementManagement/> */}

    { <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingHero />} />

        <Route path="/Login" element={<AuthPopup />} />
        <Route path="/Signup" element={<AuthPopup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/membership" element={<GymMembershipPage/>} />
        <Route path="/find-gym" element={<GymLocator />} />
        <Route path="/membershipform" element={<GymMembershipForm />} />
        <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        isAdminLoggedIn() ? <AdminDashboard /> : <Navigate to="/admin/login" />
                    }
                />
                <Route path="/" element={<Navigate to="/admin/login" />} />
      
      </Routes>
    </Router> }

    {/* <Login/> */}

    {/* <Footer/> */}
    
  </>
)
}

export default App
