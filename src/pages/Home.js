import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function Home() {
  const navigate = useNavigate();

  const handleSearch = (query, results) => {
    navigate(`/search?q=${encodeURIComponent(query)}`, { state: { results } });
  };

  return (
    <div className="home" id="home-page">
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default Home;