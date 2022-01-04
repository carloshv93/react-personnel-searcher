import { useState } from "react";
import "./style.css";

export default function SearchBox({ onSearch, onClose, isSearching }) {
  const [searchText, setSearchText] = useState("");

  const handleCloseClick = () => {
    setSearchText("");
    onClose();
  };

  const handleSearchClick = () => {
    onSearch(searchText);
    setSearchText("");
  };
  return (
    <div className="search-box">
      <h2 className="search-box-title">Personnel Searcher</h2>
      <div className="search-box-buttons">
        <label>
          <input
            value={searchText}
            onChange={({ target: { value } }) => setSearchText(value)}
            className="search-box-input"
          />
        </label>
        <button onClick={handleSearchClick} disabled={!searchText.length}>
          Search
        </button>
        {isSearching && <button onClick={handleCloseClick}>Close</button>}
      </div>
    </div>
  );
}
