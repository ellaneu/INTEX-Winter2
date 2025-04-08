import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { username, password });
    // Add authentication logic here
  };

  return (
    <div className="login-container">
      {/* Left Section with Logo */}
      <div className="left-section">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <div className="welcome-container">
          <div className="welcome-text">
            <h1>Welcome Back!</h1>
          </div>
        </div>
        {/* Image after Welcome Back */}
        <div className="image-container">
          <img
            src="/imgs/popcorn.png"
            alt="Welcome"
            className="welcome-image"
          />
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="right-section">
        <div className="login-form-container">
          <div className="login-header">
            <h2>Log in</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">USERNAME</label>
              <div className="input-container">
                <div className="input-icon"></div>
                <input
                  type="text"
                  className="form-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">PASSWORD</label>
              <div className="input-container">
                <div className="input-icon"></div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <div
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                ></div>
              </div>
            </div>
            <button type="submit" className="login-button">
              Log in
            </button>
            <div className="divider">
              <span>or</span>
            </div>
            <button type="button" className="signup-button">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
