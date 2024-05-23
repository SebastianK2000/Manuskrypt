import "../style/settings.css";

const UserData = () => {
    return (
        <div className="componentSettings">
            <p>Recommend Manuscript to your friends and receive 2 additional weeks of free access. To do so, share the link with them:</p>
            <div style={{ backgroundColor: '#e9e9e9', height: '100px', width: '800px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
                <h2 style={{ color: 'rebeccapurple', fontSize: '24px', cursor: 'pointer' }}>https://www.EXAMPLE-MANUFAKTURA.com/code/86ZPYLQ/</h2>
                <p style={{fontSize: '14px', cursor: 'pointer'}}>Tap to the copy link</p>
            </div>
        </div>
    );
}

export default UserData;
