import "../style/settings.css";

const UserData = () => {
    return (
        <div className="componentSettings">
            <div className="divChangeEmail">
                <h2>Adres e-mail</h2>
                <input style={{ height: '45px', width: '250px', borderRadius: '7px', border: '' }}></input>
                <button className="buttonEmailSaveSettings">Save</button>
            </div>
        </div>
    );
}

export default UserData;
