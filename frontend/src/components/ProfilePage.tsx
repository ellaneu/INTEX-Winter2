import React from "react";
import "./ProfilePage.css";

interface ProfileData {
  name: string;
  phoneNumber: string;
  email: string;
}

interface ProfileDropdownProps {
  profileData: ProfileData;
  onClose: () => void;
  onLogout: () => void;
}

const ProfilePage: React.FC<ProfileDropdownProps> = ({
  profileData,
  onClose,
  onLogout,
}) => {
  return (
    <div className="profile-dropdown">
      <div className="profile-header">
        <span>{profileData.name || "User"}</span>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="profile-avatar-container">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile Avatar"
          className="profile-avatar"
        />
      </div>
      <div className="profile-info">
        <div>
          {profileData.email}
        </div>
      </div>
      <button className="admin-button">Manage Movies</button>
      <button className="logout-button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};

export default ProfilePage;
