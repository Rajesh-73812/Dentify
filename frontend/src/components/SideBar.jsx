import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Drawer, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useLocation } from 'react-router-dom'; 

const menuItems = [
  { name: 'Roles', icon: <AssignmentIcon />, path: '/rolesList' }, // Changed to AssignmentIcon
  { name: 'Users', icon: <GroupIcon />, path: '/userList' }, // Changed to GroupIcon
  { name: 'Users to Roles', icon: <PersonIcon />, path: '/usersToRoles' }, 
  { name: 'Product', icon: <ShoppingCartIcon />, path: '/productList' }, // Changed to ShoppingCartIcon
  { name: 'Service', icon: <BuildIcon />, path: '/serviceList' }, // Changed to BuildIcon
  { name: 'Service Provider', icon: <PersonIcon />, path: '/serviceProviderList' }, 
  { name: 'Material', icon: <ListAltIcon />, path: '/materialList' }, // Changed to ListAltIcon
  { name: 'Jobs', icon: <WorkIcon />, path: '/jobsList' }, // Changed to WorkIcon
  { name: 'Courses', icon: <SchoolIcon />, path: '/courseList' }, // Changed to SchoolIcon
];

const SideBar = () => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: '#1976d2', color: '#fff' },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" align="center">
          DENTIIFY
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem 
            button 
            key={index} 
            component={Link} 
            to={item.path} 
            sx={{ 
              color: '#fff', 
              backgroundColor: location.pathname === item.path ? '#1565c0' : 'transparent',
              '&:hover': {
                backgroundColor: '#0d47a1',
              }
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;