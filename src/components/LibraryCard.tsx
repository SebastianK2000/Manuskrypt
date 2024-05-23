import { Link } from 'react-router-dom';
import "../style/settings.css";

const LibraryCard = () => {
    return (
        <div style={{marginTop: '50px'}} className="componentSettings">
            <div className="divChangeEmail">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to="/PageNotFound"><button style={{ width: '250px', boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.2)' }}>Active Library card</button></Link>
            </div>
        </div>
    );
}

export default LibraryCard;