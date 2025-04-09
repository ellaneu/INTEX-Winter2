import React, { useState } from "react";
import "./HomeView.css";
import ProfilePage from "./ProfilePage"; // Corrected import statement

const HomeView: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false);

  const profileData = {
    name: "Ella Neumarker",
    phoneNumber: "123-456-7890",
    email: "ella@example.com",
  };

  const handleLogout = () => {
    console.log("User logged out");
    setShowProfile(false); // close the dropdown
  };

  return (
    <div className="home-view-container">
      <div>
        {showProfile && (
          <ProfilePage
            profileData={profileData}
            onClose={() => setShowProfile(false)}
            onLogout={handleLogout}
          />
        )}
      </div>

      {/* Header */}
      <header className="home-view-header">
        <div className="brand-logo">CINENICHE</div>
        <div className="header-icons">
          <div className="header-icon search-icon"></div>
          <div
            className="header-icon user-icon"
            onClick={() => setShowProfile((prev) => !prev)}
          ></div>
        </div>
      </header>

      {/* Featured Show Section */}
      <section className="featured-show">
        <div className="featured-content">
          <h2 className="featured-title">SHOW OF THE WEEK: INTERSTELLAR</h2>
          <button className="view-movie-btn">View Movie</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-container">
          <button className="category-btn">DRAMA</button>
          <button className="category-btn">HORROR</button>
          <button className="category-btn">ACTION</button>
          <button className="category-btn">ROMANCE</button>
          <button className="category-btn">TV SHOW</button>
          <button className="category-btn">MOVIE</button>
        </div>
      </section>

      {/* Recommendation Sections */}
      <section className="recommendation-section">
        <h2 className="section-title">RECOMMENDED FOR YOU</h2>
        <div className="movie-row">
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Drama</p>
            </div>
          </div>
          {/* More movie cards */}
        </div>
      </section>
      {/* More recommendation sections */}
    </div>
  );
};

export default HomeView;
