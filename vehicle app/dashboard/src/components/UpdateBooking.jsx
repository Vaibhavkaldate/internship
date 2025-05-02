import React, { useState } from "react";
import { useBooking } from "./context/BookingContext";
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Button, Paper, Typography, TextField, MenuItem, Grid
} from "@mui/material";

const UpdateBooking = () => {
  const { bookingData, setBookingData } = useBooking(); 
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState(bookingData);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Data saved", updatedData);
  };

  const handleDelete = () => {
    console.log("Booking Deleted");
    
    setBookingData(null);  
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedData(bookingData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const isNoData = !bookingData || Object.keys(bookingData).length === 0;

  return (
    <Paper elevation={3} sx={{ padding: "2rem", marginTop: "2rem", borderRadius: "16px", maxWidth: "1200px", mx: "auto", backgroundColor: "#f5fafd" }}>
      <Typography variant="h5" sx={{ mb: 2, color: "#0d47a1", fontWeight: "bold" }}>
        Update Booking Details
      </Typography>

      {isNoData ? (
        <Typography variant="h6" sx={{ color: "#f44336", textAlign: "center", mt: 3 }}>
          No vehicles are available for updating.
        </Typography>
      ) : (
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
                <TableCell>{updatedData.bookingId}</TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField fullWidth name="vehicleNumber" value={updatedData.vehicleNumber} onChange={handleChange} />
                  ) : (
                    updatedData.vehicleNumber
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField fullWidth name="driverId" value={updatedData.driverId} onChange={handleChange} />
                  ) : (
                    updatedData.driverId
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField fullWidth name="driverName" value={updatedData.driverName} onChange={handleChange} />
                  ) : (
                    updatedData.driverName
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField select fullWidth name="vehicleType" value={updatedData.vehicleType} onChange={handleChange}>
                      {["Van", "Truck", "Container"].map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  ) : (
                    updatedData.vehicleType
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField fullWidth name="vehicleCapacity" value={updatedData.vehicleCapacity} onChange={handleChange} />
                  ) : (
                    updatedData.vehicleCapacity
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField fullWidth name="routeLocation" value={updatedData.routeLocation} onChange={handleChange} />
                  ) : (
                    updatedData.routeLocation
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField fullWidth name="productDetail" value={updatedData.productDetail} onChange={handleChange} />
                  ) : (
                    updatedData.productDetail
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField select fullWidth name="vehicleStatus" value={updatedData.vehicleStatus} onChange={handleChange}>
                      {["Available", "In Use", "Maintenance"].map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </TextField>
                  ) : (
                    updatedData.vehicleStatus
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField fullWidth name="startDate" type="date" value={updatedData.startDate} onChange={handleChange} InputLabelProps={{ shrink: true }} />
                  ) : (
                    updatedData.startDate
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <TextField fullWidth name="endDate" type="date" value={updatedData.endDate} onChange={handleChange} InputLabelProps={{ shrink: true }} />
                  ) : (
                    updatedData.endDate
                  )}
                </TableCell>
                <TableCell>
                  <Grid container spacing={2} justifyContent="center">
                    {!isEditing ? (
                      <>
                        <Grid item>
                          <Button variant="outlined" onClick={handleEdit} sx={{ marginRight: "8px" }}>
                            Edit
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined" onClick={handleDelete} sx={{ color: "#d32f2f", borderColor: "#d32f2f" }}>
                            Delete
                          </Button>
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Grid item>
                          <Button variant="contained" onClick={handleSave} sx={{ backgroundColor: "#0d47a1", color: "#fff" }}>
                            Save
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined" onClick={handleCancel} sx={{ marginLeft: "8px" }}>
                            Cancel
                          </Button>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default UpdateBooking;
