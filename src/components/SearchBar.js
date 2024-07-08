import React, { useState } from 'react';
import { searchMulti } from '../services/api';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const promises = [];

    for(let i = 1; i <= 5; i++) {
      promises.push(searchMulti(query, i));
    }
    
    const resultsArray = await Promise.all(promises);
    const allResults = resultsArray.flat();

    onSearch(query, allResults);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} id="search-form">
      <input id='search-bar'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
    </form>
  );
}

export default SearchBar;