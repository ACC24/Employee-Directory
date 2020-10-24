import React from "react";
import "./style.css";

function SearchForm( {handleInputChange} ) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          onChange={e => handleInputChange(e)}
          className="form-control"
          placeholder="Search employee"
          id="searchBox"
        />
      </div>
    </form>
  );
}

export default SearchForm;
