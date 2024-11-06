import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/rolesList':
      case '/addRoles':
        return 'Roles';

      case '/serviceProviderList':
      case '/createServiceProvider':
        return 'Service Providers';

      case '/productList':
      case '/createProduct':
        return 'Products';

      case '/jobsList':
      case '/createJobs':
        return 'Jobs';

      case '/courseList':
      case '/createCourse':
        return 'Courses';
        
      case '/materialList':
      case '/createMaterial':
        return 'Materials';

      case '/serviceList':
      case '/createService':
        return 'Services';

      case '/userList':
      case '/createUser':
        return 'Users';

      default:
        return 'Dashboard'; 
    }
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} style={{ padding: '0px 0' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" style={{ color: '#333' }}>
          {getTitle()}
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
