import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-wrapper">
      <div className="input-container">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SearchBar;
