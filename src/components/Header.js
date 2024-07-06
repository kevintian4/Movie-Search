import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function goHome(){
    window.location.href = '/';
}

function Header(){
    return (
        <header>
            <FontAwesomeIcon icon={faHouse} onClick={goHome} className="header-button" id="home-button"/>
        </header>
    )
}

export default Header;