import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./../styles/dashboard.css";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="content">
       
        {location.pathname === "/dashboard" && (
          <h2>Welcome HR You Logged Successfully!</h2>
        )}
        <Outlet /> 
      </main>
    </div>
  );
};

export default Dashboard;
