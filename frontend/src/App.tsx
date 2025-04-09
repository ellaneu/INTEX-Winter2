import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import SignUpConfirmation from "./components/SignUpConfirmation";
import SearchPage from "./components/SearchPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import HomeView from "./components/HomeView";
import MovieDetailPage from "./components/MovieDetailPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup-confirmation" element={<SignUpConfirmation />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/home-view" element={<HomeView />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;
