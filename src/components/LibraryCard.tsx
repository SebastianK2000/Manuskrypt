import React from 'react';
import { Link } from 'react-router-dom';
import "../style/settings.css";
import PageNotFound from '../pages/PageNotFound';

const LibraryCard = () => {
    return (
        <div className="componentSettings">
            <div className="divChangeEmail">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to="/PageNotFound"><button style={{ width: '250px' }}>Active Library card</button></Link>
            </div>
        </div>
    );
}

export default LibraryCard;