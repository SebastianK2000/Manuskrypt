import React from 'react';
import { Container } from 'react-bootstrap';


const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
};

const contentSecond = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20px'
};

const content = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 'calc(100vh - 100px)',
    padding: '20px',
    minHeight: '300px'
};

const bookComponent = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '5px',
    width: '300px',
    height: '400px',
    overflow: 'hidden',
};

const bookStyle = {
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
}


function App() {
    return (
        <Container style={{ width: '100%', height: '100%' }}>

            <main style={content}>
                <div style={contentStyle}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '80%', }} src="../Resources/Billy.jpg" alt="Billy Summers" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '81%' }} src="../Resources/Instytut.jpg" alt="Instytut" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src="../Resources/Kosiarze.jpg" alt="Kosiarze" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '80%' }} src="../Resources/Thunderhead.jpg" alt="Thunderhead" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src="../Resources/Diuna.jpg" alt="Diuna" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src="../Resources/TheyBoth.jpg" alt="They Both..." />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '80%' }} src="../Resources/Kamien.jpg" alt="HP - Kamieñ filozoficzny" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src="../Resources/Cujo.jpg" alt="Cujo" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src="../Resources/Holly.jpg" alt="Holly" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '80%' }} src="../Resources/Mistery.jpg" alt="Mistery" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src="../Resources/TheShining.jpg" alt="The Shining" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src="../Resources/Insygnia.jpg" alt="HP - Insygnia Smierci" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '80%' }} src="../Resources/Wiezien.jpg" alt="HP - Wiezien Azkabanu" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src="../Resources/It.jpg" alt="It" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src="../Resources/Needfull.jpg" alt="Needfull" />
                        </div>
                    </div>
                </div>

            </main>



        </Container>




    );
}

export default App;

