import "../style/pricingCard.css";
import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, storage, users, sendUp }: { title: string, price: number, storage: string, users: number, sendUp: number }) => {
    return (
        <div className="PricingCard">
            <header>
                <p className="card-title">{title}</p>
                <h1 className="card-price">{price}</h1>
            </header>
            <div className="card-features">
                <div className="card-storage">{storage}</div>
                <div className="card-users-allowed">{users} users in total</div>
                <div className="card-send-up">Send up to {sendUp}</div>
            </div>
            <Link style={{ color: 'lightgray' }} to="/PageNotFound">
                <button className="card-btn">READ MORE</button>
            </Link>
        </div>
    );
};

export default PricingCard;