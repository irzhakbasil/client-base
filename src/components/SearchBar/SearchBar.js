import React from "react";
import "./SearchBar.css";
import glass_icon from "../../image/glass.png";

const SearchBar = props => {
  return (
    <div className="search-wrapper">
      <div className="img-container">
        <img className="img" src={glass_icon} alt="search" />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search..."
          onChange={event => props.inputChange(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
