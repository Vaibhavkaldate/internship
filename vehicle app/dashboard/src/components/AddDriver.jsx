import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Grid } from "@mui/material";
import "../styles/AddDriver.css";

const AddDriver = () => {
  const [driverData, setDriverData] = useState({
    name: "",
    licenseNumber: "",
    contactNumber: "",
    email: "",
    address: "",
    experience: "",
    vehicleAssigned: "",
  });

  const handleChange = (e) => {
    setDriverData({ ...driverData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Driver Data Submitted:", driverData);
    alert("Driver added successfully!");
    setDriverData({
      name: "",
      licenseNumber: "",
      contactNumber: "",
      email: "",
      address: "",
      experience: "",
      vehicleAssigned: "",
    });
  };

  return (
    <Paper elevation={3} className="add-driver-container">
      <Typography variant="h4" className="form-title">
        Add New Driver
      </Typography>
      <form className="driver-form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField label="Full Name" name="name" value={driverData.name} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="License Number" name="licenseNumber" value={driverData.licenseNumber} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Contact Number" name="contactNumber" type="tel" value={driverData.contactNumber} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Email" name="email" type="email" value={driverData.email} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Address" name="address" value={driverData.address} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Years of Experience" name="experience" type="number" value={driverData.experience} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Vehicle Assigned" name="vehicleAssigned" value={driverData.vehicleAssigned} onChange={handleChange} required fullWidth />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" type="submit" className="submit-btn">
          Add Driver
        </Button>
      </form>
    </Paper>
  );
};

export default AddDriver;
