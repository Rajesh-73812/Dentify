import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Pagination, TextField, MenuItem, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

// Updated rows with dummy data for all columns
const rows = [
  { id: 1, name: 'Material 1', category: 'Category A', supplierName: 'Supplier A', manufacturerName: 'Manufacturer A', costPrice: 100, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 2, name: 'Material 2', category: 'Category B', supplierName: 'Supplier B', manufacturerName: 'Manufacturer B', costPrice: 150, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 3, name: 'Material 3', category: 'Category C', supplierName: 'Supplier C', manufacturerName: 'Manufacturer C', costPrice: 200, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 4, name: 'Material 4', category: 'Category D', supplierName: 'Supplier D', manufacturerName: 'Manufacturer D', costPrice: 250, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 5, name: 'Material 5', category: 'Category E', supplierName: 'Supplier E', manufacturerName: 'Manufacturer E', costPrice: 300, fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 6, name: 'Material 6', category: 'Category F', supplierName: 'Supplier F', manufacturerName: 'Manufacturer F', costPrice: 350, fromDate: '30-09-2024', toDate: '30-09-2024' },
];

const MaterialList = () => {
  const navigate = useNavigate();

  const navigateToAddNewMaterial = () => {
    navigate("/createMaterial");
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
            
            <Button variant="contained" color="primary" sx={{ ml: 'auto' }} onClick={navigateToAddNewMaterial}>
              + Create Material
            </Button>
          </Box>

          {/* Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr.</TableCell>
                  <TableCell>Material Name</TableCell>
                  <TableCell>Material Category</TableCell>
                  <TableCell>Supplier Name</TableCell>
                  <TableCell>Manufacturer Name</TableCell>
                  <TableCell>Material Cost Price</TableCell>
                  <TableCell>From Date</TableCell>
                  <TableCell>To Date</TableCell>
                  <TableCell>Actions</TableCell>
                  <TableCell>View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.supplierName}</TableCell>
                    <TableCell>{row.manufacturerName}</TableCell>
                    <TableCell>{row.costPrice}</TableCell>
                    <TableCell>{row.fromDate}</TableCell>
                    <TableCell>{row.toDate}</TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary" aria-label="edit">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="error" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary" aria-label="view">
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

export default MaterialList;