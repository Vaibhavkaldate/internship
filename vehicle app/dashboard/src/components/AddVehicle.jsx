import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Grid } from "@mui/material";
import "../styles/AddVehicle.css";

const AddVehicle = () => {
  const [vehicleData, setVehicleData] = useState({
    vehicleName: "",
    vehicleNumber: "",
    model: "",
    manufacturer: "",
    year: "",
    fuelType: "",
    capacity: "",
  });

  const handleChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vehicle Data Submitted:", vehicleData);
    alert("Vehicle added successfully!");
    setVehicleData({
      vehicleName: "",
      vehicleNumber: "",
      model: "",
      manufacturer: "",
      year: "",
      fuelType: "",
      capacity: "",
    });
  };

  return (
    <Paper elevation={3} className="add-vehicle-container">
      <Typography variant="h4" className="form-title">
        Add New Vehicle
      </Typography>
      <form className="vehicle-form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField label="Vehicle Name" name="vehicleName" value={vehicleData.vehicleName} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Vehicle Number" name="vehicleNumber" value={vehicleData.vehicleNumber} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Model" name="model" value={vehicleData.model} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Manufacturer" name="manufacturer" value={vehicleData.manufacturer} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Year of Manufacturing" name="year" type="number" value={vehicleData.year} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Fuel Type" name="fuelType" value={vehicleData.fuelType} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Load Capacity" name="capacity" type="number" value={vehicleData.capacity} onChange={handleChange} required fullWidth />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" type="submit" className="submit-btn">
          Add Vehicle
        </Button>
      </form>
    </Paper>
  );
};

export default AddVehicle;
