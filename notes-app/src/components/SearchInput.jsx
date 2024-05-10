import { useState } from "react";

function SearchInput({ value, onSearch }) {
  const [searchTerm, setSearchTerm] = useState(value);

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

export default SearchInput;
