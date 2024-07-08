import { Container } from 'react-bootstrap';
import { ImageSlider } from "./components/ImageSlider";
import car1 from "./assets/book/images1.jpg";
import car2 from "./assets/book/images2.jpg";
import car3 from "./assets/book/images3.jpg";
import car4 from "./assets/book/images9.jpg";
import car5 from "./assets/book/images5.jpg";

import billy from "./assets/Billy.jpg";
import instytut from "./assets/Instytut.jpg";
import kosiarze from "./assets/Kosiarze.jpg";
import thunderhead from "./assets/Thunderhead.jpg";
import diuna from "./assets/Diuna.jpg";
import theyBoth from "./assets/TheyBoth.jpg";
import kamien from "./assets/Kamien.jpg";
import cujo from "./assets/Cujo.jpg";
import holly from "./assets/Holly.jpg";
import mistery from "./assets/Mistery.jpg";
import theShining from "./assets/TheShining.jpg";
import insygnia from "./assets/Insygnia.jpg";
import wiezien from "./assets/Wiezien.jpg";
import it from "./assets/It.jpg";
import needfull from "./assets/Needfull.jpg";

const IMAGES = [
    { url: car1, alt: "Car One" },
    { url: car2, alt: "Car Two" },
    { url: car3, alt: "Car Three" },
    { url: car4, alt: "Car Four" },
    { url: car5, alt: "Car Five" },
];

const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-around'
};

const contentSecond: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20px'
};

const content: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    minHeight: 'calc(100vh - 100px)',
    padding: '20px'
};

const bookComponent: React.CSSProperties = {
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
                            <img style={{ ...bookStyle, width: '100%', height: '80%' }} src={billy} alt="Billy Summers" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '81%' }} src={instytut} alt="Instytut" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src={kosiarze} alt="Kosiarze" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '80%' }} src={thunderhead} alt="Thunderhead" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src={diuna} alt="Diuna" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src={theyBoth} alt="They Both..." />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '80%' }} src={kamien} alt="HP - Kamieñ filozoficzny" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src={cujo} alt="Cujo" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src={holly} alt="Holly" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '80%' }} src={mistery} alt="Mistery" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src={theShining} alt="The Shining" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src={insygnia} alt="HP - Insygnia Smierci" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '80%' }} src={wiezien} alt="HP - Wiezien Azkabanu" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src={it} alt="It" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <img style={{ ...bookStyle, width: '100%', height: '82%' }} src={needfull} alt="Needfull" />
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default Home;
