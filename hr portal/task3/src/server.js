import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "19vkaldate@gmail.com", // Your Gmail
     pass: "hrokqurckdlatyey",
  },
});

app.post("/send-email", async (req, res) => {
  const { employeeEmail, password } = req.body;

  if (!employeeEmail || !password) {
    return res.status(400).json({ message: "Employee email and password are required" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: employeeEmail,
    subject: "Your Password",
    text: `Hello, your password is: ${password}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
