import React from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import '../style/regulation.css';
import { Link } from 'react-router-dom';

const Regulations = () => {
    const regulations = [
        { title: "Terms of Service for Manuskrypt Services", icon: <AiOutlineFileText /> },
        { title: "Rules for Borrowing Ebooks on the Manuskrypt Platform", icon: <AiOutlineFileText /> },
        { title: "Privacy Policy for Manuskrypt Users", icon: <AiOutlineFileText /> },
        { title: "Regulations for Using the Manuskrypt Mobile App", icon: <AiOutlineFileText /> },
        { title: "Discounts and Promotions Policy on Manuskrypt", icon: <AiOutlineFileText /> },
        { title: "Terms of Participation in Contests on Manuskrypt", icon: <AiOutlineFileText /> },
        { title: "Procedure for Complaints about Services Provided by Manuskrypt", icon: <AiOutlineFileText /> },
        { title: "Rules for Using Audiobook Services on Manuskrypt", icon: <AiOutlineFileText /> },
        { title: "Premium Account Usage Policy on Manuskrypt", icon: <AiOutlineFileText /> },
        { title: "Refund Policy for Purchased Ebooks on Manuskrypt", icon: <AiOutlineFileText /> },
    ];

    return (
        <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '20px' }} className="regulations-container">
            <h1 className="regulationsH1">Regulations</h1>
            <div className="regulations">
                {regulations.map((regulation, index) => (
                    <Link to="/PageNotFound" key={index} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        {regulation.icon && <div style={{ marginRight: '10px' }}>{regulation.icon}</div>}
                        <p className="regulation-title" style={{ margin: '10px 0', transition: 'font-weight 0s ease-in-out' }}>{regulation.title}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Regulations;
