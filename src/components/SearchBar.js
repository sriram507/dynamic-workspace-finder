import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search for workspaces..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
