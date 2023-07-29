import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3rem" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="type to search..."
      ></input>
    </div>
  );
}

export default Search;
