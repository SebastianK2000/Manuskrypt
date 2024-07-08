import { useState } from 'react';
import { Container } from 'react-bootstrap';
import "../style/settings.css";
import UserData from '../components/UserData';
import LibraryCard from '../components/LibraryCard';
import Transaction from '../components/Transaction';
import Recommendet from '../components/Recommend';
import Subscribe from '../components/Subscribe';

export function Settings() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <Container className="mainContainerSettings">
            <div className="options">
                <p className="selectOptionData" onClick={() => handleOptionClick('User Data')}>User Data</p>
                <hr />
                <p className="selectOptionSubscribe" onClick={() => handleOptionClick('Subscribe')}>Subscribe</p>
                <hr />
                <p className="selectOptionRecommend" onClick={() => handleOptionClick('Recommend Friends')}>Recommend Friends</p>
                <hr />
                <p className="selectOptionStatic" onClick={() => handleOptionClick('Static')}>Static</p>
                <hr />
                <p className="selectOptionLibraryClub" onClick={() => handleOptionClick('Library Club')}>Library Club</p>
                <hr />
                <p className="selectOptionTransactions" onClick={() => handleOptionClick('Transactions')}>Transactions</p>
                <hr />
                <p className="selectOptionLibraryCard" onClick={() => handleOptionClick('Library Card')}>Library Card</p>
                <hr />
            </div>

            <div className="selectedOptionsView">
                {selectedOption === 'User Data' && <UserData />}
                {selectedOption === 'Subscribe' && <Subscribe />}
                {selectedOption === 'Recommend Friends' && <Recommendet />}
                {selectedOption === 'Static' && <div className="componentSettings">Static Div</div>}
                {selectedOption === 'Library Club' && <div className="componentSettings">Library Club Div</div>}
                {selectedOption === 'Transactions' && <Transaction />}
                {selectedOption === 'Library Card' && <LibraryCard />}
            </div>
        </Container>
    );
}

export default Settings;
