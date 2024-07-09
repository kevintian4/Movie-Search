import { useState } from 'react';
import { searchMulti } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
      <button type="submit" id="search-submit-icon">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

export default SearchBar;