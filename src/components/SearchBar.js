import React, { useState } from 'react';
import { searchMulti } from '../services/api';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await searchMulti(query);
    onSearch(query, results);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} id="search-form">
      <input className='search-bar'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
    </form>
  );
}

export default SearchBar;