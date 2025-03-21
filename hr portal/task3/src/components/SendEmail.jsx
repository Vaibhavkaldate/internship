
import React, { useState } from "react";
import axios from "axios";
import "./../styles/sendEmail.css";

const SendEmail = () => {
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (!employeeEmail || !password) {
      setMessage("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        employeeEmail,
        password,
      });

      setMessage(response.data.message);
      setEmployeeEmail("");
      setPassword("");
    } catch (error) {
      setMessage("Failed to send email. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="send-email-container">
      <h2>Send Email to Employee</h2>
      <form onSubmit={handleSendEmail}>
        <div className="input-group">
          <label>Employee Email:</label>
          <input
            type="email"
            placeholder="Enter employee's email"
            value={employeeEmail}
            onChange={(e) => setEmployeeEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password to send"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SendEmail;
