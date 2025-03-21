import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
   
    if (email === "hr@gmail.com" && password === "password") {
      navigate("/dashboard"); 
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        
        <div className="login-left">
          <div className="login-text">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60ZhhZ64r6YLfiavD9QkAzt7ThtENCatccw&s" alt="Login" className="login-img" />
            <h2>Welcome HR </h2>
            <p>Login  to get access</p>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
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
