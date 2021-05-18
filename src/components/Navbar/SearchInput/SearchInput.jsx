import React from "react";
import "./SearchInput.css";

function SearchInput() {
  return (
    <div className="bg-ThemeTertiary px-3 py-2 rounded-3">
      <i className="bi bi-search"></i>
      <input className="search-input ms-3" type="text" placeholder="Search" />
    </div>
  );
}

export default SearchInput;
