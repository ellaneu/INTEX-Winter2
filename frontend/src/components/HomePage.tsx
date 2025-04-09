import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

// Sample movie data
const trendingMovies = [
  {
    id: 1,
    title: "The Lighthouse",
    director: "Robert Eggers",
    year: 2019,
    rating: 4.5,
    image: "/imgs/movie1.jpg",
    detailUrl: "/movie/1",
  },
  {
    id: 2,
    title: "Parasite",
    director: "Bong Joon-ho",
    year: 2019,
    rating: 4.8,
    image: "/imgs/movie2.jpg",
    detailUrl: "/movie/2",
  },
  {
    id: 3,
    title: "Portrait of a Lady on Fire",
    director: "Céline Sciamma",
    year: 2019,
    rating: 4.6,
    image: "/imgs/movie3.jpg",
    detailUrl: "/movie/3",
  },
  {
    id: 4,
    title: "Nomadland",
    director: "Chloé Zhao",
    year: 2020,
    rating: 4.7,
    image: "/imgs/movie4.jpg",
    detailUrl: "/movie/4",
  },
];

const topRatedMovies = [
  {
    id: 5,
    title: "Moonlight",
    director: "Barry Jenkins",
    year: 2016,
    rating: 4.9,
    image: "/imgs/movie5.jpg",
    detailUrl: "/movie/5",
  },
  {
    id: 6,
    title: "The Handmaiden",
    director: "Park Chan-wook",
    year: 2016,
    rating: 4.8,
    image: "/imgs/movie6.jpg",
    detailUrl: "/movie/6",
  },
  {
    id: 7,
    title: "Minari",
    director: "Lee Isaac Chung",
    year: 2020,
    rating: 4.7,
    image: "/imgs/movie7.jpg",
    detailUrl: "/movie/7",
  },
  {
    id: 8,
    title: "First Cow",
    director: "Kelly Reichardt",
    year: 2019,
    rating: 4.6,
    image: "/imgs/movie8.jpg",
    detailUrl: "/movie/8",
  },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      {/* Navigation Header */}
      <header className="home-header">
        <div className="brand-logo">CineNiche</div>
        <nav className="nav-links">
          <div className="nav-item active">HOME</div>
          <div className="nav-item" onClick={handleLogin}>
            LOGIN
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">CineNiche</h1>
          <h2 className="hero-subtitle">Cinema Off the Beaten Path</h2>
          <button className="get-started-btn" onClick={handleGetStarted}>
            GET STARTED
          </button>
        </div>
        <img src="/imgs/chair.png" className="round-image" width="500" />
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-container">
          <div className="info-content">
            <h2 className="info-title">
              Movies don't have to be mainstream to be meaningful.
            </h2>
            <p className="info-text">
              CineNiche is here to help you discover and appreciate films on
              their own merit, not just based on their box office success.
            </p>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
          <img src="/imgs/arrow.png" width="500" />
        </div>
      </section>

      {/* Trending Section */}
      <section className="trending-section">
        <div className="section-header">
          <h2 className="section-title">TRENDING NOW</h2>
          <button className="more-btn">MORE</button>
        </div>
        <div className="movie-grid">
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(movie.detailUrl)}
            >
              <div
                className="movie-poster"
                style={{ backgroundImage: `url(${movie.image})` }}
              >
                <div className="movie-rating">{movie.rating}</div>
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <div className="movie-details">
                  <span className="movie-director">{movie.director}</span>
                  <span className="movie-year">{movie.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="header-and-image">
          <h2 className="features-title">Reasons to Join</h2>
          <img
            src="/imgs/filmCamera.png"
            alt="Descriptive Alt Text"
            className="features-image"
          />
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-card-title">Personalized Recommendations</h3>
            <p className="feature-card-text">
              Get hand-picked suggestions based on your unique taste—not what's
              trending. Say goodbye to algorithm-based content.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">
              Learn the Stories Behind the Stories
            </h3>
            <p className="feature-card-text">
              Unlock in-depth insights, director's cuts, and behind-the-scenes
              features to deepen your appreciation of every film.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">Leave Reviews & Ratings</h3>
            <p className="feature-card-text">
              Let your voice be heard and help others find their next favorite.
            </p>
          </div>
        </div>
      </section>

      {/* Top Rated Section */}
      <section className="top-rated-section">
        <div className="section-header">
          <h2 className="section-title">TOP RATED</h2>
          <button className="more-btn">MORE</button>
        </div>
        <div className="movie-grid">
          {topRatedMovies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(movie.detailUrl)}
            >
              <div
                className="movie-poster"
                style={{ backgroundImage: `url(${movie.image})` }}
              >
                <div className="movie-rating">{movie.rating}</div>
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <div className="movie-details">
                  <span className="movie-director">{movie.director}</span>
                  <span className="movie-year">{movie.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className={`faq-item ${openFaqIndex === 0 ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFaq(0)}>
              <div>
                What makes your movie selection different from other streaming
                services?
              </div>
              <div className="faq-toggle"></div>
            </div>
            <div className="faq-answer">
              <p>
                Unlike mainstream platforms that prioritize blockbusters and
                trending content, CineNiche focuses on curating quality films
                across all genres, eras, and countries. We highlight independent
                productions, festival favorites, and critically acclaimed works
                that might not receive attention on commercial platforms.
              </p>
            </div>
          </div>
          <div className={`faq-item ${openFaqIndex === 1 ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFaq(1)}>
              <div>Is it free to use the site?</div>
              <div className="faq-toggle"></div>
            </div>
            <div className="faq-answer">
              <p>
                Yes, basic browsing and discovery features are completely free.
                We offer a premium tier that provides additional benefits like
                personalized recommendations, exclusive content, and ad-free
                browsing for a small monthly subscription.
              </p>
            </div>
          </div>
          <div className={`faq-item ${openFaqIndex === 2 ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFaq(2)}>
              <div>How do you choose which movies to feature?</div>
              <div className="faq-toggle"></div>
            </div>
            <div className="faq-answer">
              <p>
                Our curation team consists of film critics, historians, and
                passionate cinephiles who select films based on artistic merit,
                cultural significance, and unique storytelling. We also consider
                user ratings and feedback to ensure we're featuring films that
                resonate with our community.
              </p>
            </div>
          </div>
          <div className={`faq-item ${openFaqIndex === 3 ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFaq(3)}>
              <div>Can I suggest a movie to be added?</div>
              <div className="faq-toggle"></div>
            </div>
            <div className="faq-answer">
              <p>
                Absolutely! We welcome suggestions from our community. You can
                submit film recommendations through your profile once you've
                created an account. Our team reviews all suggestions and
                frequently adds user-recommended films to our catalog.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        className="cta-section"
        style={{
          background: "linear-gradient(135deg, #018fa6 0%, #e4e801 100%)",
          padding: "60px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        <div className="cta-content">
          <h2 className="cta-title">Start exploring new films today</h2>
          <p className="cta-text">
            Explore indie gems, cult classics, and hidden treasures - your next
            favorite film is just a click away.
          </p>
          <button className="cta-btn" onClick={handleGetStarted}>
            GET STARTED
          </button>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-column-title">Company</h3>
            <div className="footer-link">About</div>
            <div className="footer-link">Press</div>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Contact</h3>
            <div className="footer-link">FAQ</div>
            <div className="footer-link">Privacy Policy</div>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Social</h3>
            <div className="footer-link">Facebook</div>
            <div className="footer-link">Instagram</div>
            <div className="footer-link">Twitter</div>
          </div>
        </div>
        <img src="/imgs/popcorn.png" width="400" alt="Popcorn" />
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="copyright">© CineNiche. All Rights Reserved 2023</div>
      </footer>
    </div>
  );
};

export default HomePage;
