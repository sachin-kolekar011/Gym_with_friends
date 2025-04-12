// components/AuthPopup.jsx
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Login from './Login';
import Signup from './Signup';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthPopup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');

  useEffect(() => {
    // Open modal and set form based on route
    if (location.pathname === '/login') {
      setCurrentForm('login');
      setIsOpen(true);
    } else if (location.pathname === '/signup') {
      setCurrentForm('signup');
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const handleClose = () => {
    navigate('/'); // Go to home when closing
  };

  const switchForm = (formType) => {
    navigate(`/${formType}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {currentForm === 'login' ? (
        <Login 
          onClose={handleClose}
          onSwitch={() => switchForm('signup')}
        />
      ) : (
        <Signup 
          onClose={handleClose}
          onSwitch={() => switchForm('login')}
        />
      )}
    </Modal>
  );
};

export default AuthPopup;