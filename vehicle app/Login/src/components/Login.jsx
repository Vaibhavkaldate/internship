import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/login.css";
import loginImage from "./../components/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
      
        <div className="login-left">
          <div className="login-text">
            <img src={loginImage} alt="Login" className="login-img" />
            <h2>Welcome ! </h2>
            <p>Login to get access</p>
          </div>
        </div>

        <div className="login-right">
          <h2 className="login-title">Sign in</h2>
          <p className="login-subtitle"> Please enter your credentials.</p>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleLogin} className="login-btn">LOG IN</button>

          <p className="forgot-password">
            Forgot Your Password? <span className="reset-link">Reset Password</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
