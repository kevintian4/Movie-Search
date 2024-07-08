import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function Home() {
  const navigate = useNavigate();

  const handleSearch = (query, results) => {
    navigate(`/search?q=${encodeURIComponent(query)}`, { state: { results } });
  };

  return (
    <div className="home" id="home-page">
      <h1 id="home-title">Movie Search App</h1>
      <h3 id="home-subtitle">Discover Movies, TV Shows, Actors, and More</h3>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default Home;