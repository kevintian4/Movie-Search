import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function Home() {
  const navigate = useNavigate();

  const handleSearch = (query, movies) => {
    navigate(`/search?q=${encodeURIComponent(query)}`, { state: { movies } });
  };

  return (
    <div className="home" id="home-page">
      <h1>Search for Your Favorite Movies and TV Shows</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default Home;