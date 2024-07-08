import { useState } from "react";
import "../style/help.css";

export const Help = () => {
    const [category, setCategory] = useState("");
    const [fullName, setFullName] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setCategory("");
        setFullName("");
        setDescription("");
        setEmail("");
    };

    return (
        <div className="create">
            <h2 style={{ color: "#0D1B1E" }}>Contact us</h2>
            <form className='formHelp' onSubmit={handleSubmit}>
                <label className="labelTop">Category problem:</label>
                <input className="inputHelp"
                    type="text"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <div className="create1">
                    <h2 style={{ color: "#0D1B1E" }}>Add a new problem report</h2>
                    <label>Full user name:</label>
                    <input className="inputHelp"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <label>Descriptions:</label>
                    <textarea
                        className="descriptions"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <label>Enter your email address</label>
                    <input className="inputHelp"
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Help;
