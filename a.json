import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS or framework styles

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) || 
        item.capital.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Render suggestions dropdown
  const renderSuggestions = () => {
    if (suggestions.length === 0 && searchTerm) {
      return <p>No suggestions found</p>;
    }

    return (
      <ul className="suggestions">
        {suggestions.map((item, index) => (
          <li key={index}>
            {item.name} ({item.capital})
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange} 
        placeholder="Search by country or capital..." 
        className="search-input"
      />
      {searchTerm && renderSuggestions()}
    </div>
  );
};

export default SearchBar;
