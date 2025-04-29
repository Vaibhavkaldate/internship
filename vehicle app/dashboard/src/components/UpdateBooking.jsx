import React from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";

const UpdateBooking = () => {
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
        Update Booking Details
      </Typography>

      <Grid container spacing={3}>
        {/* Booking ID */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Booking Reference ID"
            variant="outlined"
            required
          />
        </Grid>

        {/* Vehicle Number */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Assigned Vehicle Number"
            variant="outlined"
            required
          />
        </Grid>

        {/* Driver ID */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Driver ID"
            variant="outlined"
            required
          />
        </Grid>

        {/* Driver Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Driver Name"
            variant="outlined"
          />
        </Grid>

        {/* Updated Pickup Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Updated Pickup Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>

        {/* Updated Drop-off Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Updated Drop-off Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>

        {/* Pickup Location */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Updated Pickup Location"
            variant="outlined"
            required
          />
        </Grid>

        {/* Drop Location */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Updated Drop-off Location"
            variant="outlined"
            required
          />
        </Grid>

        {/* Kilometers Driven */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Updated Kilometers Driven"
            variant="outlined"
            type="number"
          />
        </Grid>

        {/* Special Instructions or Remarks */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Special Instructions or Remarks"
            multiline
            rows={3}
            variant="outlined"
            placeholder="Any changes or special notes..."
          />
        </Grid>

        {/* Update Button */}
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
            Update Booking Details
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UpdateBooking;
