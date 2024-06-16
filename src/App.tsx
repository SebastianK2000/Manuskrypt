import React from 'react';
import { Container } from 'react-bootstrap';
import classNames from 'classnames';
import { ImageSlider } from "./components/ImageSlider";
import car1 from "./assets/book/images1.jpg";
import car2 from "./assets/book/images2.jpg";
import car3 from "./assets/book/images3.jpg";
import car4 from "./assets/book/images9.jpg";
import car5 from "./assets/book/images5.jpg";

const IMAGES = [
    { url: car1, alt: "Car One" },
    { url: car2, alt: "Car Two" },
    { url: car3, alt: "Car Three" },
    { url: car4, alt: "Car Four" },
    { url: car5, alt: "Car Five" },
];

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

const Home = () => {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px', fontSize: '20px' }}>
                The most popular in this week!
            </div>
            <div className="mainHomeSlider">
                <ImageSlider images={IMAGES} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px', fontSize: '20px' }}>
                Or select another bestseller!
            </div>
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
};

export default Home;
