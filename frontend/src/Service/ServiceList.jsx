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
  { id: 1, serviceName: 'Service 1', category: 'Category 1', mobileNo: '1234567890', provider: 'Provider 1' },
  { id: 2, serviceName: 'Service 2', category: 'Category 2', mobileNo: '0987654321', provider: 'Provider 2' },
  { id: 3, serviceName: 'Service 3', category: 'Category 3', mobileNo: '1122334455', provider: 'Provider 3' },
  { id: 4, serviceName: 'Service 4', category: 'Category 4', mobileNo: '2233445566', provider: 'Provider 4' },
  { id: 5, serviceName: 'Service 5', category: 'Category 5', mobileNo: '3344556677', provider: 'Provider 5' },
  { id: 6, serviceName: 'Service 6', category: 'Category 6', mobileNo: '4455667788', provider: 'Provider 6' },
];

const ServiceList = () => {
  const navigate = useNavigate();

  const navigateToAddService = () => {
    navigate("/createService");
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
            
            
            
            <Button variant="contained" color="primary" sx={{ ml: 'auto' }} onClick={navigateToAddService}>
              + Create Service
            </Button>
          </Box>

          {/* Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr.</TableCell>
                  <TableCell>Service Name</TableCell>
                  <TableCell>Service Category</TableCell>
                  <TableCell>Mobile No</TableCell>
                  <TableCell>Service Provider</TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell>View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row .id}</TableCell>
                    <TableCell>{row.serviceName}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.mobileNo}</TableCell>
                    <TableCell>{row.provider}</TableCell>
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
            <Typography variant="body2">Showing {rows.length} of {rows.length}</Typography>
            <Pagination count={1} color="primary" />
          </Box>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default ServiceList;