import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import { Box, Button, Container, Grid, TextField, Typography, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const CreateCourse  = () => {
  const [courseCharges, setCourseCharges] = React.useState('free'); 
  const [courseType, setCourseType] = React.useState('online');
  const [source, setSource] = React.useState(''); 

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Header */}
        <Header />

        {/* Form Container */}
        <Container>
          {/* Back Button and Title */}
          <Box display="flex" alignItems="center" mb={2}>
            <ArrowBackIosNewIcon sx={{ cursor: 'pointer', mr: 1 }} />
            <Typography variant="h6">Create Course</Typography>
          </Box>

          {/* Form Title */}
          <Typography variant="h5" gutterBottom>
            Add Course
          </Typography>

          {/* Form Fields */}
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="Course name"
                  required
                  fullWidth
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="Course Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="Course End Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  variant="outlined"
                />
              </Grid>

              {/* Course Type Radio Buttons */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle1">Course Type</Typography>
                <RadioGroup
                  row
                  value={courseType}
                  onChange={(e) => setCourseType(e.target.value)}
                >
                  <FormControlLabel value="online" control={<Radio />} label="Online" />
                  <FormControlLabel value="inPerson" control={<Radio />} label="In-Person" />
                </RadioGroup>
              </Grid>

              

              {/* Source Dropdown */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Source</InputLabel>
                  <Select
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    label="Source"
                    sx={{
                      bgcolor: '#f5f5f5',
                      '& .MuiSelect-outlined': {
                        paddingTop: '10px',
                        paddingBottom: '10px',
                      },
                    }}
                  >
                    <MenuItem value="website">Website</MenuItem>
                    <MenuItem value="referral">Referral</MenuItem>
                    <MenuItem value="socialMedia">Social Media</MenuItem>
                    <MenuItem value="advertisement">Advertisement</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="City Name"
                  fullWidth
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="State"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="Course Address"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              {/* Course Charges Radio Buttons */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle1">Course Charges</Typography>
                <RadioGroup
                  row
                  value={courseCharges}
                  onChange={(e) => setCourseCharges(e.target.value)}
                >
                  <FormControlLabel value="free" control={<Radio />} label="Free" />
                  <FormControlLabel value="paid" control={<Radio />} label="Paid" />
                </RadioGroup>
              </Grid>
              
              {/* Course Charges Radio Buttons */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle1">Course Charges</Typography>
                <RadioGroup
                  row
                  value={courseCharges}
                  onChange={(e) => setCourseCharges(e.target.value)}
                >
                  <FormControlLabel value="free" control={<Radio />} label="Free" />
                  <FormControlLabel value="paid" control={<Radio />} label="Paid" />
                </RadioGroup>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="Amount"
                  fullWidth
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="Description"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>

            {/* Action Buttons */}
            <Box display="flex" justifyContent="flex-end" mt={3}>
              <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Box>
        </Container>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default CreateCourse;
