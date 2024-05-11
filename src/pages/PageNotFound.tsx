import React from "react";
import { Link } from 'react-router-dom';

const PageNotFound = () => {

    return (
        <>
            <main style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', color: 'violet' }}>
                <div style={{ width: '50vw', height: '50vw', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }} className="notFound">
                    <img src="../Resources/404.svg" alt="svg" />
                    <button style={{ textDecoration: 'none' }}>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Home</Link>
                    </button>
                </div>
            </main>
        </>
    );
};

export default PageNotFound;
