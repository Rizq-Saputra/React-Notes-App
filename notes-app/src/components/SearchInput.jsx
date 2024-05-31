import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SearchInput({ value, onSearch }) {
  const [searchTerm, setSearchTerm] = useState(value);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={searchTerm}
        placeholder="Cari catatan..."
        onChange={handleInputChange}
      />
      <button className="button-search" onClick={handleButtonClick}>
        Cari
      </button>
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
