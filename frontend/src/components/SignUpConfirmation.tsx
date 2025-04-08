import React from "react";
import "./SignUpConfirmation.css";

interface SignUpConfirmationProps {
  onLogin: () => void;
}

const SignUpConfirmation: React.FC<SignUpConfirmationProps> = ({ onLogin }) => {
  return (
    <div className="confirmation-container">
      <div className="signup-left-section">
        <div className="back-button"></div>
        <div className="welcome-text">Thank You!</div>
        <img
          src="/imgs/camera.png"
          alt="camera img"
          className="centered-image"
        />
      </div>
      <div className="confirmation-right-section">
        <div className="confirmation-content">
          <h1 className="confirmation-title">Account Created Successfully!</h1>
          <p className="confirmation-message">
            Your account has been created. Click the Login button below to sign
            in and get started.
          </p>
          <button className="login-button" onClick={onLogin}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpConfirmation;
