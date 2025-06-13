import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EventIcon from "@mui/icons-material/Event";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HelpIcon from "@mui/icons-material/Help";
import logo from "../assets/logo.png";

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  { text: "Assign Vehicle", icon: <DirectionsCarIcon />, path: "/assign-vehicle" },
  { text: "Release Booking", icon: <EventIcon />, path: "/release-booking" },
  { text: "Update Booking", icon: <EditIcon />, path: "/update-booking" },
  { text: "Add Driver", icon: <PersonAddIcon />, path: "/add-driver" },
  { text: "Add Vehicle", icon: <DirectionsBusIcon />, path: "/add-vehicle" },
  { text: "Add Location", icon: <LocationOnIcon />, path: "/add-location" },
  { text: "Incident Reports", icon: <ReportProblemIcon />, path: "/incident-reports" },
  { text: "Feedback", icon: <FeedbackIcon />, path: "/feedback" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { text: "Support ", icon: <HelpIcon />, path: "/support-help" },
  { text: "Logout", icon: <ExitToAppIcon />, path: "/logout" },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 240, backgroundColor: "#0D47A1", color: "white" },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <img src={logo} alt="Mahyco Grow" style={{ width: "180px", height: "auto" }} />
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.text}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
