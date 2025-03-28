// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AssignVehicle from "./components/AssignVehicle";
import ReleaseBooking from "./components/ReleaseBooking";
import UpdateBooking from "./components/UpdateBooking";
import AddDriver from "./components/AddDriver";
import AddVehicle from "./components/AddVehicle";
import AddLocation from "./components/AddLocation";
import AboutUs from "./components/AboutUs";
import Settings from "./components/Settings";
import Logout from "./components/Logout";
import "./styles/App.css";

const App = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assign-vehicle" element={<AssignVehicle />} />
            <Route path="/release-booking" element={<ReleaseBooking />} />
            <Route path="/update-booking" element={<UpdateBooking />} />
            <Route path="/add-driver" element={<AddDriver />} />
            <Route path="/add-vehicle" element={<AddVehicle />} />
            <Route path="/add-location" element={<AddLocation />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
