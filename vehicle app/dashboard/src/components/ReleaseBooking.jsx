
import React from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";

const ReleaseBooking = () => {
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
        Release Booking
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
          <TextField
            fullWidth
            label="Release Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Release Time"
            type="time"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Destination Reached" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Kilometers Driven" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Remarks"
            multiline
            rows={3}
            variant="outlined"
            placeholder="Any special remarks..."
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
            Release Booking
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReleaseBooking;
