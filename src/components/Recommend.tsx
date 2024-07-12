import "../style/settings.css";

const UserData = () => {
    return (
        <div style={{marginTop: '150px'}} className="componentSettings">
            <p className="recommend-p">Recommend Manuscript to your friends and receive 2 additional weeks of free access. To do so, share the link with them:</p>
            <div className="recomend-component">
                <h2 className="recommend-h1" style={{ color: 'rebeccapurple', fontSize: '24px', cursor: 'pointer' }}>https://www.EXAMPLE-MANUFAKTURA.com/code/86ZPYLQ/</h2>
                <p className="recommend-p" style={{fontSize: '14px', cursor: 'pointer'}}>Tap to the copy link</p>
            </div>
        </div>
    );
}

export default UserData;
