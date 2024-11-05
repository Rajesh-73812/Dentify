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
  { id: 1, name: 'Product 1', category: 'Category 1', source: 'Source 1', price: '₹2000', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 2, name: 'Product 2', category: 'Category 2', source: 'Source 2', price: '₹1500', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 3, name: 'Product 3', category: 'Category 3', source: 'Source 3', price: '₹3000', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 4, name: 'Product 4', category: 'Category 4', source: 'Source 4', price: '₹2500', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 5, name: 'Product 5', category: 'Category 5', source: 'Source 5', price: '₹3500', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 6, name: 'Product 6', category: 'Category 6', source: 'Source 6', price: '₹4000', fromDate: '30-09-2024', toDate: '30-09-2024' },
];

const ProductList = () => {
  const navigate = useNavigate();

  const navigateToAddNewProduct = () => {
    navigate("/createProduct");
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
           
            <Button variant="contained" color="primary" sx={{ ml: 'auto' }} onClick={navigateToAddNewProduct}>
              + Create Product
            </Button>
          </Box>

          {/* Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr.</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Category</TableCell>
                  <TableCell>Product Source</TableCell>
                  <TableCell>Product Price</TableCell>
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
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.source}</TableCell>
                    <TableCell>{row.price}</TableCell>
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
            <Typography variant="body2">Showing {rows.length} of {rows.length}</Typography>
            <Pagination count={1} color="primary" />
          </Box>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductList;