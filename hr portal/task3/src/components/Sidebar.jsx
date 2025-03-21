import React from "react";
import { Link } from "react-router-dom";
import "./../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>HR Dashboard</h2>
      <nav>
        <Link to="/dashboard/home">Home</Link>
        <Link to="/dashboard/page1">Employees</Link>
        <Link to="/dashboard/page2">New Users</Link>
        <Link to="/dashboard/send-email">Send Email</Link>
        <Link to="/dashboard/logout">Logout</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
