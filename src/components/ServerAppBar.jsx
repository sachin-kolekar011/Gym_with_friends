import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ServerAppBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        {/* Logo Section */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          {/* Replace this with your logo */}
          <img src="/path-to-your-logo/logo.png" alt="Logo" style={{ width: '40px' }} />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Server Client Dashboard
        </Typography>

        {/* Navigation Options */}
        <Box>
          <Button color="inherit">Add Data</Button>
          <Button color="inherit">View Data</Button>
          <Button color="inherit">Settings</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ServerAppBar;