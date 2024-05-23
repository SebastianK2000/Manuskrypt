import "../style/settings.css";
import { Link } from 'react-router-dom';

const Subscribe = () => {
    return (
        <div>
            <div style={{border: 'none'}} className="divChangeEmail">
                <p>You don't have Subscribe plan. Do you want get him?</p>
                <Link to="/Price"><button className="buttonEmailSaveSettings">Get Subscribe!</button></Link>
            </div>
        </div>
    );
}

export default Subscribe;
