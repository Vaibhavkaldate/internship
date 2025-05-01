import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Avatar,
  IconButton,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "../styles/AddDriver.css"; // contains font family setup (e.g., Roboto)

const AddLocation = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        marginTop: "2rem",
        backgroundColor: "#f5fafd",
        borderRadius: "16px",
        maxWidth: "1000px",
        mx: "auto",
        fontFamily: "'Roboto', sans-serif", // matching font
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "1.5rem",
          color: "#0d47a1",
          fontWeight: "bold",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Add New Location
      </Typography>

      <Grid container spacing={3} sx={{ fontFamily: "'Roboto', sans-serif" }}>
        <Grid item xs={12} sm={6}>
          <TextField label="Location Name *" fullWidth required variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="State/Province *" fullWidth required variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Location Type *"
            select
            fullWidth
            required
            variant="outlined"
          >
            <MenuItem value="pickup">Pickup</MenuItem>
            <MenuItem value="dropoff">Drop-off</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Zip Code/Post Code *" fullWidth required variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Address *" fullWidth required variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="GPS Coordinates" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City/Town *" fullWidth required variant="outlined" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Avatar
              src={image}
              alt="Location"
              sx={{ width: 80, height: 80, border: "2px solid #ccc" }}
            >
              {!image && "No Image"}
            </Avatar>
            <label htmlFor="upload-image">
              <input
                accept="image/*"
                id="upload-image"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <IconButton
                component="span"
                sx={{
                  backgroundColor: "#0d47a1",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#08306b",
                  },
                }}
              >
                <CameraAltIcon />
              </IconButton>
            </label>
          </div>
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
              paddingX: "2rem",
              paddingY: "0.5rem",
              fontWeight: "bold",
              fontFamily: "'Roboto', sans-serif",
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
