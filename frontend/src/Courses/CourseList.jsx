import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Pagination, TextField, MenuItem, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

// Updated rows with more relevant data
const rows = [
  { id: 1, name: 'Role name 1', courseType: 'Type A', courseSource: 'Source 1', courseChanges: 'Updated', fromDate: '30-09-2024', toDate: '30-09-2024' },
  { id: 2, name: 'Role name 2', courseType: 'Type B', courseSource: 'Source 2', courseChanges: 'New', fromDate: '01-10-2024', toDate: '01-11-2024' },
  { id: 3, name: 'Role name 3', courseType: 'Type A', courseSource: 'Source 1', courseChanges: 'No Changes', fromDate: '15-09-2024', toDate: '15-10-2024' },
  { id: 4, name: 'Role name 4', courseType: 'Type C', courseSource: 'Source 3', courseChanges: 'Updated', fromDate: '20-09-2024', toDate: '20-10-2024' },
  { id: 5, name: 'Role name 5', courseType: 'Type B', courseSource: 'Source 2', courseChanges: 'New', fromDate: '25-09-2024', toDate: '25-10-2024' },
  { id: 6, name: 'Role name 6', courseType: 'Type A', courseSource: 'Source 1', courseChanges: 'No Changes', fromDate: '30-09-2024', toDate: '30-10-2024' },
];

const CourseList = () => {
  const navigate = useNavigate();

  const navigateToAddCourse = () => {
    navigate("/createCourse");
  }

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
            
            <Button variant="contained" color="primary" sx={{ ml: 'auto' }} onClick={navigateToAddCourse}>
              + Create Course
             </Button>
          </Box>

          {/* Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr.</TableCell>
                  <TableCell>Course Name</TableCell>
                  <TableCell>Course Type</TableCell>
                  <TableCell>Course Source</TableCell>
                  <TableCell>Course Changes</TableCell>
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
                    <TableCell>{row.courseType}</TableCell>
                    <TableCell>{row.courseSource}</TableCell>
                    <TableCell>{row.courseChanges}</TableCell>
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

export default CourseList;