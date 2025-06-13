import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer
} from '@mui/material';

const SupportHelp = () => {
  return (
    <Box p={3} sx={{ backgroundColor: '#f5fafd', minHeight: '100vh' }}>
      {/* Top Banner */}
      <Box
        sx={{
          backgroundColor: '#1565C0',
          borderRadius: 2,
          p: 4,
          mb: 4,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Support Ticket List
        </Typography>
        <Typography variant="body1">
          View and manage all raised support tickets from clients.
        </Typography>
      </Box>

      {/* Table */}
      <Paper elevation={3} sx={{ borderRadius: 2 }}>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: '#e3f2fd' }}>
              <TableRow>
                <TableCell><strong>Full Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Category</strong></TableCell>
                <TableCell><strong>Subject</strong></TableCell>
                <TableCell><strong>Message</strong></TableCell>
                <TableCell><strong>Attachment</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No support tickets submitted yet.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default SupportHelp;
