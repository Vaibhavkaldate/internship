import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./context/BookingContext";
import {
  TextField, Button, Grid, Paper, Typography, MenuItem,
} from "@mui/material";

const AssignVehicle = () => {
  const navigate = useNavigate();
  const { setBookingData } = useBooking();

  const [formData, setFormData] = useState({
    bookingId: "",
    vehicleNumber: "",
    driverId: "",
    driverName: "",
    vehicleType: "",
    vehicleCapacity: "",
    routeLocation: "",
    productDetail: "",
    vehicleStatus: "",
    startDate: "",
    endDate: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setErrors(prev => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setBookingData(formData);
      navigate("/release-booking");
    }
  };

  const requiredFields = [
    { label: "Booking ID", name: "bookingId" },
    { label: "Vehicle Number", name: "vehicleNumber" },
    { label: "Driver ID", name: "driverId" },
    { label: "Driver Name", name: "driverName" },
    { label: "Vehicle Capacity", name: "vehicleCapacity" },
    { label: "Route Location", name: "routeLocation" },
    { label: "Product Detail", name: "productDetail" },
  ];

  return (
    <Paper elevation={3} sx={{ padding: "2rem", marginTop: "2rem", borderRadius: "16px", maxWidth: "800px", mx: "auto", backgroundColor: "#f5fafd" }}>
      <Typography variant="h5" sx={{ mb: 2, color: "#0d47a1", fontWeight: "bold" }}>
        Assign Vehicle
      </Typography>

      <Grid container spacing={3}>
        {requiredFields.map(({ label, name }) => (
          <Grid item xs={12} sm={6} key={name}>
            <TextField
              fullWidth
              label={`${label} *`}
              name={name}
              variant="outlined"
              value={formData[name]}
              onChange={handleChange}
              error={!!errors[name]}
              helperText={errors[name] && "This field is required"}
            />
          </Grid>
        ))}

        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="Vehicle Status *"
            name="vehicleStatus"
            variant="outlined"
            value={formData.vehicleStatus}
            onChange={handleChange}
            error={!!errors.vehicleStatus}
            helperText={errors.vehicleStatus && "This field is required"}
          >
            {["Available", "In Use", "Maintenance"].map(status => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="Vehicle Type *"
            name="vehicleType"
            variant="outlined"
            value={formData.vehicleType}
            onChange={handleChange}
            error={!!errors.vehicleType}
            helperText={errors.vehicleType && "This field is required"}
          >
            {["Van", "Truck", "Container"].map(type => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Start Date *"
            type="date"
            name="startDate"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={handleChange}
            error={!!errors.startDate}
            helperText={errors.startDate && "This field is required"}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="End Date *"
            type="date"
            name="endDate"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.endDate}
            onChange={handleChange}
            error={!!errors.endDate}
            helperText={errors.endDate && "This field is required"}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#0d47a1",
              color: "#fff",
              "&:hover": { backgroundColor: "#08306b" }
            }}
          >
            Assign Vehicle
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AssignVehicle;
