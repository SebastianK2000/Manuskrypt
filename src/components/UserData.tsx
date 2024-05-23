import React, { useState } from "react";
import "../style/settings.css";

const UserData = () => {
    const [userData, setUserData] = useState({
        email: "user@example.com",
        firstName: "John",
        lastName: "Doe",
        phone: "123-456-7890",
        password: "********"
    });

    const [editData, setEditData] = useState(userData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    const handleSave = (field) => {
        setUserData({ ...userData, [field]: editData[field] });
        alert(`${field} has been updated!`);
    };

    return (
        <div className="componentSettings">
            <div className="divChangeEmail">
                <h2>Change Email</h2>
                <p>Current: {userData.email}</p>
                <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                    placeholder="Enter new email"
                    className="inputField"
                />
                <button onClick={() => handleSave("email")} className="buttonSaveSettings">Save</button>
            </div>

            <div className="divUserDetails">
                <h2>First Name</h2>
                <p>Your First name: {userData.firstName}</p>
                <input
                    type="text"
                    name="firstName"
                    value={editData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    className="inputField"
                />
                <button onClick={() => handleSave("firstName")} className="buttonSaveSettings">Save</button>
            </div>

            <div className="divUserLastName">
            <h2>Last Name</h2>
                <p>Your Last name: {userData.lastName}</p>
                <input
                    type="text"
                    name="lastName"
                    value={editData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    className="inputField"
                />
                <button onClick={() => handleSave("lastName")} className="buttonSaveSettings">Save</button>
            </div>

            <div className="divUserPhone">
            <h2>Phone</h2>
                <p>Your Phone: {userData.phone}</p>
                <input
                    type="tel"
                    name="phone"
                    value={editData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="inputField"
                />
                <button onClick={() => handleSave("phone")} className="buttonSaveSettings">Save</button>
            </div>

            <div className="divUserPassword">
            <h2>Password</h2>
                <input
                    type="password"
                    name="password"
                    value={editData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="inputField"
                />
                <button onClick={() => handleSave("password")} className="buttonSaveSettings">Save</button>
            </div>

            </div>
    );
}

export default UserData;
