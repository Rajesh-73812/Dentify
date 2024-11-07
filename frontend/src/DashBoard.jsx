import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import { Box, Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon
import { useNavigate } from 'react-router-dom';

const rows = [
  { id: 1, name: 'Role name 1', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 2, name: 'Role name 2', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 3, name: 'Role name 3', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 4, name: 'Role name 4', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 5, name: 'Role name 5', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 6, name: 'Role name 6', fromDate: '30-09-2024', toDate: '30-09-2024' },
];

const DashBoard = () => {
  const navigate = useNavigate();

  const navigateToAddRoles = () => {
    navigate("/addRoles");
  };

  const createNewUser  = () => {
    // Add your logic to create a new user
    console.log("Create new user");
  };

  return (
    <Box sx={{ display: 'flex'   }}>
      <Header />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3,background: '#F7FBFF'  }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 5, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            User List
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Search and Filter Fields */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <TextField
                label="Type"
                variant="outlined"
                size="small"
                select
                defaultValue="All"
                sx={{ width: { xs: '100%', sm: '150px' } }}
              >
                <MenuItem value="All">Select Roles</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User ">User </MenuItem>
              </TextField>
              
              <Button variant="contained" color="primary">
                Assign
              </Button>

              <TextField
                label="Search"
                variant="outlined"
                size="small"
                sx={{ width: { xs: '100%', sm: '200px' } }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" color="primary" onClick={createNewUser }>
                + Create User
              </Button>
            </Box>
          </Box>           
        </Box>
        
        {/* Card Container */}
        <Box sx={{ position: 'relative', top: '176px', mx: 2 }}>
          <Card 
            sx={{ 
              padding: '24px', 
              borderRadius: '12px', 
              border: '1.29px solid #EAE5FF', 
              backgroundColor: '#FFFFFF', 
              opacity: 1, 
            }}
          >
            <CardContent>
              <TableContainer component={Paper} elevation={0} sx={{ marginTop: '16px', border: 'none' }}>
                <Table sx={{ borderCollapse: 'collapse' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ borderLeft: ' none', borderRight: 'none' }}><strong>Name</strong></TableCell>
                      <TableCell align="right" sx={{ borderLeft: 'none', borderRight: 'none' }}><strong>From Date</strong></TableCell>
                      <TableCell align="right" sx={{ borderLeft: 'none', borderRight: 'none' }}><strong>To Date</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <React.Fragment key={row.id}>
                        <TableRow>
                          <TableCell component="th" scope="row" sx={{ borderLeft: 'none', borderRight: 'none' }}>
                            {row.name}
                          </TableCell>
                          <TableCell align="right" sx={{ borderLeft: 'none', borderRight: 'none' }}>{row.fromDate}</TableCell>
                          <TableCell align="right" sx={{ borderLeft: 'none', borderRight: 'none' }}>{row.toDate}</TableCell>
                        </TableRow>
                        {/* Divider line below each row */}
                        <TableRow>
                          <TableCell colSpan={3} sx={{ padding: 0 }}>
                            <Box sx={{ height: '1px', backgroundColor: '#EAE5FF' }} />
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

export default DashBoard;
//  background: #F7FBFF;
