import { Link, useLocation } from 'react-router-dom';
import notFound from "../assets/404.svg";
import '../style/notFound.css';

const PageNotFound = () => {
    const location = useLocation();

    const isNotFoundPage = location.pathname === '/PageNotFound';

    if (isNotFoundPage) {
        return (
            <>
                <main className="main-container-not-found">
                    <div className="notFound">
                        <img className="img-not-found" src={notFound} alt="404" />
                        
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            <button className="not-found-button" style={{ textDecoration: 'none', width: '800px' }}>Back to the Home</button>
                        </Link>
                    </div>
                </main>
            </>
        );
    }

    return null;
};

export default PageNotFound;
