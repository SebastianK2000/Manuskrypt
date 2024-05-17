import React from "react";
import { Link, useLocation } from 'react-router-dom';

const PageNotFound = () => {
    const location = useLocation();

    const isNotFoundPage = location.pathname === '/PageNotFound';

    if (isNotFoundPage) {
        return (
            <>
                <main style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', color: 'violet' }}>
                    <div style={{ width: '50vw', height: '50vw', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }} className="notFound">
                        <img src="../Resources/404.svg" alt="svg" />
                        
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            <button style={{ textDecoration: 'none', width: '800px' }}>Back to the Home</button>
                        </Link>
                    </div>
                </main>
            </>
        );
    }

    return null;
};

export default PageNotFound;
