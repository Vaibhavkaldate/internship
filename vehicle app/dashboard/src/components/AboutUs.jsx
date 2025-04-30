import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import contactImage from "./../assets/contact.jpg";

const AboutUs = () => {
  return (
    <Box p={4} display="flex" justifyContent="center">
      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          width: { xs: "100%", sm: "95%", md: "85%", lg: "75%" },
          maxWidth: "950px",
        }}
      >
        <Grid container>
          {/* Left Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: "#1565C0",
              color: "white",
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={contactImage}
              alt="Contact"
              style={{
                width: "100%",
                maxWidth: "300px", // Increased image size
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Get in Touch!
            </Typography>
            <Typography variant="body2" textAlign="center">
              Send us a message.
            </Typography>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} sx={{ p: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Send Notification
            </Typography>
            <Typography variant="body2" mb={2}>
              Enter your details below.
            </Typography>

            <form>
              <TextField
                fullWidth
                label="Enter email"
                type="email"
                variant="outlined"
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    height: "48px", // Slightly taller input
                  },
                  "& label.Mui-focused": {
                    color: "#1565C0",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#1565C0",
                  },
                }}
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message here"
                variant="outlined"
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                  "& label.Mui-focused": {
                    color: "#1565C0",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#1565C0",
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#1565C0",
                  borderRadius: "8px",
                  py: 1.4,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#0d47a1",
                  },
                }}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AboutUs;
