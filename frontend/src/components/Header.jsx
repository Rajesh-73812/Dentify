import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Import the Notifications icon

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} style={{ padding: '10px 0' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" style={{ color: '#333' }}>
          
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="end" color="inherit">
            <NotificationsIcon style={{ color: '#333' }} />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <AccountCircleIcon style={{ color: '#333' }} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;