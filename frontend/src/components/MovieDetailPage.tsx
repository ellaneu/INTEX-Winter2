import React from "react";
import "./MovieDetailPage.css";

interface MovieDetailPageProps {
  movie?: {
    id: number;
    title: string;
    year: number;
    rating: string;
    duration: string;
    description: string;
    director: string;
    cast: string;
    country: string;
    type: string;
    image: string;
    starRating: number;
  };
}

const MovieDetailPage: React.FC<MovieDetailPageProps> = ({ movie }) => {
  const [userRating, setUserRating] = React.useState<number | null>(null);
  const [ratingType, setRatingType] = React.useState<"average" | "my">(
    "average",
  );
  // Default movie data if none is provided
  const defaultMovie = {
    id: 1,
    title: "Dick Johnson Is Dead",
    year: 2020,
    rating: "PG-13",
    duration: "90 min",
    description:
      "As her father nears the end of his life filmmaker Kirsten Johnson stages his death in inventive and comical ways to help them both face the inevitable.",
    director: "Kirsten Johnson",
    cast: "Michael Hilow, Ana Hoffman, Dick Johnson, Kirsten Johnson, Chad Knorr",
    country: "United States",
    type: "Movie",
    image: "/imgs/movie-detail.jpg",
    starRating: 5,
  };

  const movieData = movie || defaultMovie;

  // Generate star rating elements
  const renderStars = () => {
    const stars = [];
    // Use user rating when "my" is selected and user has rated, otherwise use movie rating
    const currentRating =
      ratingType === "my" && userRating !== null
        ? userRating
        : movieData.starRating;

    for (let i = 0; i < 5; i++) {
      stars.push(
        <div
          key={i}
          className={`star ${i < currentRating ? "filled" : "empty"}`}
          onClick={() => handleStarClick(i + 1)}
          onMouseEnter={() => handleStarHover(i + 1)}
          onMouseLeave={handleStarLeave}
          title={`Rate ${i + 1} stars`}
        ></div>,
      );
    }
    return stars;
  };

  // Handle star click for rating
  const handleStarClick = (rating: number) => {
    setUserRating(rating);
    setRatingType("my"); // Switch to "My Rating" when user rates
    console.log(`You rated this movie ${rating} stars`);
    // Here you would typically send this rating to your backend
  };

  // Handle rating type toggle
  const handleRatingTypeChange = (type: "average" | "my") => {
    setRatingType(type);
  };

  // Handle star hover for preview
  const [hoverRating, setHoverRating] = React.useState<number | null>(null);

  const handleStarHover = (rating: number) => {
    setHoverRating(rating);
  };

  const handleStarLeave = () => {
    setHoverRating(null);
  };

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-content">
        <div className="movie-poster">
          <img src="/imgs/dickJohnson.jpg" alt={movieData.title} />
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{movieData.title}</h1>
          <div className="movie-meta">
            {movieData.year} | {movieData.rating} | {movieData.duration}
          </div>
          <div className="rating-toggle">
            <button
              className={`toggle-btn ${ratingType === "average" ? "active" : ""}`}
              onClick={() => handleRatingTypeChange("average")}
            >
              Average Rating
            </button>
            <button
              className={`toggle-btn ${ratingType === "my" ? "active" : ""}`}
              onClick={() => handleRatingTypeChange("my")}
            >
              My Rating {userRating ? `(${userRating}/5)` : ""}
            </button>
          </div>
          <div className="star-rating">{renderStars()}</div>
          <div className="movie-description">{movieData.description}</div>
          <div className="movie-details">
            <div className="detail-row">
              <div className="detail-label">Director:</div>
              <div className="detail-value">{movieData.director}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">Cast:</div>
              <div className="detail-value">{movieData.cast}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">Country:</div>
              <div className="detail-value">{movieData.country}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">Type:</div>
              <div className="detail-value">{movieData.type}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
