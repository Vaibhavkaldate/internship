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

const Feedback = () => {
  const feedbacks = []; // Placeholder for feedback entries

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f5fafd",
        minHeight: "100vh",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          color: "#1565C0",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Feedback View
      </Typography>

      <Paper elevation={3} sx={{ borderRadius: 2 }}>
        <TableContainer>
          <Table size="small" sx={{ tableLayout: "fixed" }}>
            <TableHead sx={{ backgroundColor: "#1565C0" }}>
              <TableRow>
                {[
                  "Company Name",
                  "Contact Person",
                  "Contact Info",
                  "Delivery Smooth",
                  "Correct Location",
                  "Correct Quantity",
                  "Product Handled Well",
                  "Documents Provided",
                  "Timely Delivery",
                  "Packaging Quality",
                  "Easy Communication",
                  "Satisfaction Rating",
                  "Recommend Us",
                  "Comments",
                ].map((header, idx) => (
                  <TableCell
                    key={idx}
                    sx={{
                      color: "white",
                      fontSize: "13.5px",
                      padding: "6px",
                      wordWrap: "break-word",
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbacks.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={14}
                    align="center"
                    sx={{ fontStyle: "italic", fontSize: "13.5px" }}
                  >
                    No feedback submitted yet.
                  </TableCell>
                </TableRow>
              ) : (
                feedbacks.map((fb, index) => (
                  <TableRow key={index}>
                    <TableCell>{fb.companyName}</TableCell>
                    <TableCell>{fb.contactPerson}</TableCell>
                    <TableCell>{fb.contactInfo}</TableCell>
                    <TableCell>{fb.deliverySmooth}</TableCell>
                    <TableCell>{fb.correctLocation}</TableCell>
                    <TableCell>{fb.correctQuantity}</TableCell>
                    <TableCell>{fb.productHandledWell}</TableCell>
                    <TableCell>{fb.documentsProvided}</TableCell>
                    <TableCell>{fb.timelyDelivery}</TableCell>
                    <TableCell>{fb.packagingQuality}</TableCell>
                    <TableCell>{fb.easyCommunication}</TableCell>
                    <TableCell>{fb.satisfactionRating}</TableCell>
                    <TableCell>{fb.recommendUs}</TableCell>
                    <TableCell>{fb.comments}</TableCell>
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

export default Feedback;
