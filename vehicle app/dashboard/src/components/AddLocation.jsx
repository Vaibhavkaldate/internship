import React from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";

const AddLocation = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        marginTop: "2rem",
        backgroundColor: "#f5fafd",
        borderRadius: "16px",
        maxWidth: "800px",
        mx: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: "1rem", color: "#0d47a1", fontWeight: "bold" }}
      >
        Add New Location
      </Typography>

      <Grid container spacing={3}>
        {/* Location Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Location Name"
            variant="outlined"
            required
          />
        </Grid>

        {/* Location Type (Pickup/Drop-off) */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Location Type (e.g., Pickup, Drop-off)"
            variant="outlined"
            required
          />
        </Grid>

        {/* Address */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Location Address"
            variant="outlined"
            required
          />
        </Grid>

        {/* Contact Number */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Contact Number"
            variant="outlined"
            type="tel"
          />
        </Grid>

        {/* Email Address */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            type="email"
          />
        </Grid>

        {/* Special Instructions */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Special Instructions or Notes"
            multiline
            rows={3}
            variant="outlined"
            placeholder="Any special instructions or details about the location..."
          />
        </Grid>

        {/* Add Location Button */}
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
            Add Location
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddLocation;
