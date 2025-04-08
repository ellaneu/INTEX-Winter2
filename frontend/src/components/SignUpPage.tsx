import React, { useState } from "react";
import "./SignUpPage.css";
import SignUpConfirmation from "./SignUpConfirmation";

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle account creation logic here
    console.log("Creating account with:", { firstName, lastName, password });
    // Set sign-up as complete to show confirmation screen
    setIsSignUpComplete(true);
  };

  const handleLogin = () => {
    // Handle navigation to login page
    console.log("Navigate to login page");
    // Reset the sign-up complete state if needed
    setIsSignUpComplete(false);
  };

  // If sign-up is complete, show the confirmation screen
  if (isSignUpComplete) {
    return <SignUpConfirmation onLogin={handleLogin} />;
  }

  // Otherwise, show the sign-up form
  return (
    <div className="signup-container">
      <div className="signup-left-section">
        <div className="back-button"></div>
        <div className="welcome-text">Welcome!</div>
        <img
          src="/imgs/camera.png"
          alt="camera img"
          className="centered-image"
        />
      </div>
      <div className="signup-right-section">
        <div className="signup-form-container">
          <div className="signup-title">Sign up</div>
          <form className="signup-form" onSubmit={handleCreateAccount}>
            <div className="form-group">
              <label className="form-label">FIRST NAME</label>
              <input
                type="text"
                className="form-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">LAST NAME</label>
              <input
                type="text"
                className="form-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="create-account-button">
              Create Account
            </button>
            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-text">or</div>
              <div className="divider-line"></div>
            </div>
            <button
              type="button"
              className="login-button"
              onClick={handleLogin}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
