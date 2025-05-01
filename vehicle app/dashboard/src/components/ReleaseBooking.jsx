import React from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./context/BookingContext";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Typography, Grid } from "@mui/material";

const ReleaseBooking = () => {
  const navigate = useNavigate();
  const { bookingData } = useBooking();

  const handleAccept = () => {
    navigate("/update-booking");
  };

  const handleReject = () => {
    // Logic for rejecting can be added here
    console.log("Booking Rejected");
  };

  return (
    <Paper elevation={3} sx={{ padding: "2rem", marginTop: "2rem", borderRadius: "16px", maxWidth: "1200px", mx: "auto", backgroundColor: "#f5fafd" }}>
      <Typography variant="h5" sx={{ mb: 2, color: "#0d47a1", fontWeight: "bold" }}>
        Release Booking
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>Vehicle Number</TableCell>
              <TableCell>Driver ID</TableCell>
              <TableCell>Driver Name</TableCell>
              <TableCell>Vehicle Type</TableCell>
              <TableCell>Vehicle Capacity</TableCell>
              <TableCell>Route Location</TableCell>
              <TableCell>Product Detail</TableCell>
              <TableCell>Vehicle Status</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{bookingData.bookingId}</TableCell>
              <TableCell>{bookingData.vehicleNumber}</TableCell>
              <TableCell>{bookingData.driverId}</TableCell>
              <TableCell>{bookingData.driverName}</TableCell>
              <TableCell>{bookingData.vehicleType}</TableCell>
              <TableCell>{bookingData.vehicleCapacity}</TableCell>
              <TableCell>{bookingData.routeLocation}</TableCell>
              <TableCell>{bookingData.productDetail}</TableCell>
              <TableCell>{bookingData.vehicleStatus}</TableCell>
              <TableCell>{bookingData.startDate}</TableCell>
              <TableCell>{bookingData.endDate}</TableCell>
              <TableCell>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={handleAccept}
                      sx={{
                        backgroundColor: "#0d47a1",
                        color: "#fff",
                        fontSize: "0.875rem", // Smaller size
                        padding: "8px 20px", // Adjusted padding for smaller button
                      }}
                    >
                      Accept
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={handleReject}
                      sx={{
                        color: "#0d47a1",
                        borderColor: "#0d47a1",
                        fontSize: "0.875rem", // Smaller size
                        padding: "8px 20px", // Adjusted padding for smaller button
                      }}
                    >
                      Reject
                    </Button>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ReleaseBooking;
