import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  Avatar,
  IconButton,
  Paper
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Settings = () => {
  const [tab, setTab] = useState(0);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleTabChange = (event, newValue) => setTab(newValue);

  return (
    <Box p={3} sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        General Settings
      </Typography>

      <Tabs value={tab} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
        <Tab label="PROFILE SETTINGS" />
        <Tab label="NOTIFICATION SETTINGS" />
        <Tab label="SECURITY SETTINGS" />
      </Tabs>

      <Box mt={2}>
        {tab === 0 && (
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <Avatar src={profileImage} sx={{ width: 80, height: 80 }} />
              <input
                accept="image/*"
                id="upload-photo"
                type="file"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              <label htmlFor="upload-photo">
                <IconButton color="primary" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </Box>
            <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Phone Number" variant="outlined" sx={{ mb: 2 }} />
            <Box display="flex" gap={2}>
              <Button variant="outlined" color="primary">
                Edit
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#1976d2' }}>
                Save Changes
              </Button>
            </Box>
          </Paper>
        )}

        {tab === 1 && (
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <Box display="flex" alignItems="center" gap={4}>
              <Box display="flex" alignItems="center" gap={1}>
                <Switch defaultChecked />
                <Typography>Enable Email Notifications</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Switch />
                <Typography>Enable SMS Notifications</Typography>
              </Box>
            </Box>
          </Paper>
        )}

        {tab === 2 && (
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <TextField
              fullWidth
              label="Current Password"
              variant="outlined"
              type="password"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="New Password"
              variant="outlined"
              type="password"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Confirm New Password"
              variant="outlined"
              type="password"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" sx={{ backgroundColor: '#1976d2' }}>
              Change Password
            </Button>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default Settings;
