import React, { useState } from "react";
import "../style/settings.css";

const UserData = () => {
    const [userData, setUserData] = useState({
        email: "user@example.com",
        firstName: "John",
        lastName: "Doe",
        phone: "123-456-7890",
        password: "********",
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
        }
    });

    const [editData, setEditData] = useState(userData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in editData.address) {
            setEditData({
                ...editData,
                address: { ...editData.address, [name]: value }
            });
        } else {
            setEditData({ ...editData, [name]: value });
        }
    };

    const handleSave = (field) => {
        setUserData({ ...userData, [field]: editData[field] });
        alert(`${field} has been updated!`);
    };

    const handleSaveAddress = () => {
        setUserData({ ...userData, address: editData.address });
        alert("Address has been updated!");
    };

    return (
        <div className="componentSettings">
            <div className="divChangeEmail">
                <h2 className="divH2UserData">Change Email</h2>
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
                <h2 className="divH2UserData">First Name</h2>
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
                <h2 className="divH2UserData">Last Name</h2>
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
                <h2 className="divH2UserData">Phone</h2>
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
                <h2 className="divH2UserData">Password</h2>
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

            <div className="divUserAddress">
                <h2 className="divH2UserData">Address</h2>
                <p>Street: {userData.address.street}</p>
                <input
                    type="text"
                    name="street"
                    value={editData.address.street}
                    onChange={handleChange}
                    placeholder="Enter street"
                    className="inputField"
                />
                <p>City: {userData.address.city}</p>
                <input
                    type="text"
                    name="city"
                    value={editData.address.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="inputField"
                />
                <p>State: {userData.address.state}</p>
                <input
                    type="text"
                    name="state"
                    value={editData.address.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    className="inputField"
                />
                <p>Zip: {userData.address.zip}</p>
                <input
                    type="text"
                    name="zip"
                    value={editData.address.zip}
                    onChange={handleChange}
                    placeholder="Enter zip code"
                    className="inputField"
                />
                <button onClick={handleSaveAddress} className="buttonSaveSettings">Save Address</button>
            </div>

            <div className="divUserPassword">
                <h2 className="divH2UserData">Do you want to delete account?</h2>
                <button onClick={() => handleSave("delete")} className="deleteButton">Delete</button>
            </div>
        </div>
    );
}

export default UserData;
