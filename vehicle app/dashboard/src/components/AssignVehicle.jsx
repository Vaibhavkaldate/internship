
import React from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";

const AssignVehicle = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        marginTop: "2rem",
        backgroundColor: "#f5fafd",
        borderRadius: "16px",
        maxWidth: "800px", // Keep the form narrow
        mx: "auto",         // Center the form horizontally
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: "1rem", color: "#0d47a1", fontWeight: "bold" }}
      >
        Assign Vehicle
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Booking ID" variant="outlined" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Vehicle Number" variant="outlined" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Driver ID" variant="outlined" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Driver Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Vehicle Type" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Vehicle Capacity" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Route Location" variant="outlined" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Transport Company" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Vehicle Status" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0d47a1",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#08306b",
              },
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
