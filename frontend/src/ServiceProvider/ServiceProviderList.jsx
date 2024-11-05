import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Pagination, TextField, MenuItem, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const rows = [
  { id: 1, name: 'Role name 1', email: 'role1@example.com', mobileNo: '1234567890', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 2, name: 'Role name 2', email: 'role2@example.com', mobileNo: '2345678901', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 3, name: 'Role name 3', email: 'role3@example.com', mobileNo: '3456789012', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 4, name: 'Role name 4', email: 'role4@example.com', mobileNo: '4567890123', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 5, name: 'Role name 5', email: 'role5@example.com', mobileNo: '5678901234', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 6, name: 'Role name 6', email: 'role6@example.com', mobileNo: '6789012345', fromDate: '30-09-2024', toDate: '30-09-2024' },
];

const DashBoard = () => {
  const navigate = useNavigate();

  const navigateToAddNewServiceProvider = () => {
    navigate("/createServiceProvider");
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header />
        <Container>
          {/* Search and Filters Row */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2, mb: 2 }}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              sx={{ width: '200px' }}
            />
                       
            <Button variant="contained" color="primary" sx={{ ml: 'auto' }} onClick={navigateToAddNewServiceProvider}>
              + Create Service
            </Button>
          </Box>

          {/* Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr.</TableCell>
                  <TableCell>Service Provider Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell >Mobile No</TableCell>
                  <TableCell>From Date</TableCell>
                  <TableCell>To Date</TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell>View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.mobileNo}</TableCell>
                    <TableCell>{row.fromDate}</TableCell>
                    <TableCell>{row.toDate}</TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant="body2">Showing 06 of 06</Typography>
            <Pagination count={1} color="primary" />
          </Box>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default DashBoard;