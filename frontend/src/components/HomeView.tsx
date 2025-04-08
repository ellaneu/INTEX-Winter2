import React from "react";
import "./HomeView.css";

const HomeView: React.FC = () => {
  return (
    <div className="home-view-container">
      {/* Header */}
      <header className="home-view-header">
        <div className="brand-logo">CINENICHE</div>
        <div className="header-icons">
          <div className="header-icon search-icon"></div>
          <div className="header-icon user-icon"></div>
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
          {/* Movie cards would go here */}
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Drama</p>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Drama</p>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Drama</p>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Drama</p>
            </div>
          </div>
        </div>
      </section>

      <section className="recommendation-section">
        <h2 className="section-title">BECAUSE YOU WATCHED: WICKED</h2>
        <div className="movie-row">
          {/* Movie cards would go here */}
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Drama</p>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Drama</p>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Drama</p>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Drama</p>
            </div>
          </div>
        </div>
      </section>

      <section className="recommendation-section">
        <h2 className="section-title">COMEDY MOVIES</h2>
        <div className="movie-row">
          {/* Movie cards would go here */}
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Comedy</p>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Comedy</p>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Comedy</p>
            </div>
          </div>
          <div className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
              <h3 className="movie-title">Movie Title</h3>
              <p className="movie-details">2023 • Comedy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
