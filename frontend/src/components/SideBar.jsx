import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Drawer, Typography } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GroupIconOutlined from '@mui/icons-material/Group';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Roles', icon: <AssignmentOutlinedIcon />, paths: ['/rolesList', '/addRoles'] }, 
  { name: 'Users', icon: <PeopleAltOutlinedIcon />, paths: ['/userList', '/createUser '] }, 
  { name: 'Users to Roles', icon: <PersonOutlinedIcon />, paths: ['/usersToRoles'] }, 
  { name: 'Product', icon: <ShoppingCartOutlinedIcon />, paths: ['/productList', '/createProduct'] }, 
  { name: 'Service', icon: <BuildOutlinedIcon />, paths: ['/serviceList', '/createService'] }, 
  { name: 'Service Provider', icon: <PersonOutlinedIcon />, paths: ['/serviceProviderList', '/createServiceProvider'] }, 
  { name: 'Material', icon: <ListAltOutlinedIcon />, paths: ['/materialList', '/createMaterial'] }, 
  { name: 'Jobs', icon: <WorkOutlineIcon />, paths: ['/jobsList', '/createJobs'] }, 
  { name: 'Courses', icon: <SchoolOutlinedIcon />, paths: ['/courseList', '/createCourse'] }, 
];

const SideBar = () => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': { 
          width: 240, 
          boxSizing: 'border-box', 
          backgroundColor: '#439BFF', 
          color: '#fff', 
          borderRadius: '0px 15px 15px 0px' // Rounded corners on the right
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>
          DENTIIFY
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => {
          const isSelected = item.paths.includes(location.pathname);

          return (
            <ListItem 
              button 
              key={index} 
              component={Link} 
              to={item.paths[0]} 
              aria-current={isSelected ? 'page' : undefined} 
              sx={{ 
                color: isSelected ? '#1976d2' : '#fff',  
                backgroundColor: isSelected ? '#fff' : 'transparent',  
                '&:hover': {
                  backgroundColor: isSelected ? '#fff' : '#0d47a1', 
                },
                borderRadius: '14px',  
                margin: '3px 0px',  
                padding: '8px 16px',  
                boxShadow: isSelected ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none', 
              }}
            >
              <ListItemIcon sx={{ color: isSelected ? '#1976d2' : '#fff', minWidth: '40px', fontSize: '1.5rem' }}>  
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ fontWeight:'normal' }}  
                // primaryTypographyProps={{ fontWeight: isSelected ? 'normal' : 'normal' }}  
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SideBar;