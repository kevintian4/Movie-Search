import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function goHome(){
    window.location.href = '/';
}

function Header(){
    const navigate = useNavigate();

    const handleSearch = (query, results) => {
        navigate(`/search?q=${encodeURIComponent(query)}`, { state: { results } });
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
    };

    return (
        <header>
            <FontAwesomeIcon icon={faHouse} onClick={goHome} className="header-button" id="home-button"/>
            <SearchBar onSearch={handleSearch} />
        </header>
    )
}

export default Header;