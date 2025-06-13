import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const IncidentReports = () => {
  const reports = []; // No data yet

  return (
    <Box
      p={3}
      sx={{
        backgroundColor: "#f5fafd",
        minHeight: "100vh",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Top Banner */}
      <Box
        sx={{
          backgroundColor: "#1565C0",
          borderRadius: 2,
          p: 4,
          mb: 4,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Incident Reports
        </Typography>
        <Typography variant="body1">
          Track and manage all reported incidents here.
        </Typography>
      </Box>

      {/* Table */}
      <Paper elevation={3} sx={{ borderRadius: 2 }}>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#1565C0" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}><strong>Vehicle ID</strong></TableCell>
                <TableCell sx={{ color: "white" }}><strong>Booking ID</strong></TableCell>
                <TableCell sx={{ color: "white" }}><strong>Incident Type</strong></TableCell>
                <TableCell sx={{ color: "white" }}><strong>Product ID</strong></TableCell>
                <TableCell sx={{ color: "white" }}><strong>Quantity</strong></TableCell>
                <TableCell sx={{ color: "white" }}><strong>Delivery Date</strong></TableCell>
                <TableCell sx={{ color: "white" }}><strong>Description</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ fontStyle: "italic" }}>
                    No incident reports filed yet.
                  </TableCell>
                </TableRow>
              ) : (
                reports.map((report, index) => (
                  <TableRow key={index}>
                    <TableCell>{report.vehicleId}</TableCell>
                    <TableCell>{report.bookingId}</TableCell>
                    <TableCell>{report.incidentType}</TableCell>
                    <TableCell>{report.productId}</TableCell>
                    <TableCell>{report.quantity}</TableCell>
                    <TableCell>{report.deliveryDate}</TableCell>
                    <TableCell>{report.description}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default IncidentReports;
