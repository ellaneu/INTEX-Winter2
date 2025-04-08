import React, { useState } from "react";
import "./SearchPage.css";

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <div className="brand-name">CINENICHE</div>
        <div className="spacer"></div>
        <div className="user-profile">
          <div className="user-avatar">
            <div className="user-icon"></div>
          </div>
        </div>
      </div>
      <div className="search-content">
        <div className="search-box-container">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="search-icon-wrapper">
                <div className="search-icon"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
