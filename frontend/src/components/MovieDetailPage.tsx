import React, { useState } from "react";
import "./MovieDetailPage.css";

interface MovieDetailFormData {
  director: string;
  cast: string;
  country: string;
  releaseYear: string;
  duration: string;
  description: string;
  rating: number;
}

const MovieDetailPage: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [formData, setFormData] = useState<MovieDetailFormData>({
    director: "",
    cast: "",
    country: "",
    releaseYear: "",
    duration: "",
    description: "",
    rating: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to an API
  };

  return (
    <div className="movie-detail-container">
      <header className="movie-detail-header">
        <div className="movie-detail-logo">CINENICHE</div>
        <div className="movie-detail-nav">
          <div className="profile-icon" title="User Profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </div>
        </div>
      </header>

      <div className="movie-detail-content">
        <div className="movie-poster-container">
          <div className="movie-poster-placeholder"></div>
          <div className="star-rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? "filled" : "empty"}`}
                onClick={() => {
                  setRating(star);
                  setFormData((prev) => ({ ...prev, rating: star }));
                }}
                onMouseEnter={() => setRating(star)}
                onMouseLeave={() => setRating(formData.rating)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="movie-form-container">
          <h1 className="movie-title">Movie Name</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="director">Director:</label>
              <div className="input-container">
                <input
                  type="text"
                  id="director"
                  name="director"
                  value={formData.director}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cast">Cast</label>
              <div className="input-container">
                <input
                  type="text"
                  id="cast"
                  name="cast"
                  value={formData.cast}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <div className="input-container">
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="releaseYear">Release Year:</label>
              <div className="input-container">
                <input
                  type="text"
                  id="releaseYear"
                  name="releaseYear"
                  value={formData.releaseYear}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration:</label>
              <div className="input-container">
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <div className="input-container">
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
