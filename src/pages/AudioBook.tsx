import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaHeadphones } from "react-icons/fa";
import { FaReadme } from "react-icons/fa";

const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
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
    height: '450px',
    overflow: 'hidden',
    transition: '0.3s'
};


const bookStyle = {
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
    maxHeight: '400px',
    maxWidth: '250px',
    minHeight: '400px',
    minWidth: '250px',
}



const AudioBook: React.FC = () => {


    return (
        <Container style={{ width: '100%', height: '100%' }}>

            <main style={content}>
                <div style={contentStyle}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/1.jpg" alt="The Cerulean" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ color: 'lightgray', margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyBook" style={{ ...bookStyle }} src="../Resources/2.jpg" alt="The truth lies here" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/3.jpg" alt="questions i want to ask you" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/4.jpg" alt="Before we desappear" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/5.jpg" alt="The ninth life" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ color: 'lightgray', margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyAudio" style={{ ...bookStyle }} src="../Resources/6.jpg" alt="Nobody knows but you" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/7.jpg" alt="i hope you get this message" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ color: 'lightgray', margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyAudio" style={{ ...bookStyle }} src="../Resources/8.jpg" alt="The book of lost things" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/9.jpg" alt="Museum of thieves" />
                        </div>
                    </div>
                </div>

                <div style={contentStyle}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/10.jpg" alt="The diary of a bookseller" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/11.jpg" alt="The complete tales and poems of Edgar Allan Poe" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/12.jpg" alt="The book of hidden things" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ color: 'lightgray', margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyBook" style={{ ...bookStyle }} src="../Resources/13.jpg" alt="Every other weekend" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/14.jpg" alt="Wilder girls" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/15.jpg" alt="The Sacrifice box" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/16.jpg" alt="Other peoples money" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ color: 'lightgray', margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/17.jpg" alt="Nightbooks" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ color: 'lightgray', margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyBook" style={{ ...bookStyle }} src="../Resources/18.jpg" alt="Mist and whispers" />
                        </div>
                    </div>
                </div>

                <div style={contentStyle}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/19.jpg" alt="Harry Potter and the Prisoner of Azkaban" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ color: 'lightgray', margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyAudio" style={{ ...bookStyle }} src="../Resources/20.jpg" alt="The upstairs room" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/21.jpg" alt="Intro the library she goes to lose her mind and find her soul." />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/22.jpg" alt="Its not hoarding if its books" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/23.jpg" alt="Jungle book" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/24.jpg" alt="The bookshop and the barbarian" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/25.jpg" alt="Lake town" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/40.jpg" alt="Black Coffe" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ color: 'lightgray', margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyBook" style={{ ...bookStyle }} src="../Resources/27.jpg" alt="Five feet apart" />
                        </div>
                    </div>
                </div>

                <div style={contentStyle}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ color: 'lightgray', margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyAudio" style={{ ...bookStyle }} src="../Resources/28.jpg" alt="1984" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ color: 'lightgray', margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyBook" style={{ ...bookStyle }} src="../Resources/29.jpg" alt="The age of perpelual light" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/30.jpg" alt="The power" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/31.jpg" alt="Name of the wind" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/32.jpg" alt="Pet sematary" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/33.jpg" alt="You've reached Sam" />
                        </div>
                    </div>
                </div>

                <div style={contentSecond}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/34.jpg" alt="The secret od chimneys" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ color: 'lightgray', margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyAudio" style={{ ...bookStyle }} src="../Resources/35.jpg" alt="The alchemist" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ color: 'lightgray', margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyBook" style={{ ...bookStyle }} src="../Resources/36.jpg" alt="Alquimista" />
                        </div>
                    </div>
                </div>

                <div style={contentStyle}>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/37.jpg" alt="Alfph" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="Combo" style={{ ...bookStyle }} src="../Resources/38.jpg" alt="Murder is easy" />
                        </div>
                    </div>
                    <div style={bookComponent} className="bookElement">
                        <div>
                            <FaReadme style={{ margin: '5px' }} /><FaHeadphones style={{ color: 'lightgray', margin: '1px', width: '15px', position: 'relative', top: '-1px' }} />
                            <img className="OnlyBook" style={{ ...bookStyle }} src="../Resources/39.jpg" alt="A notice das bruxas" />
                        </div>
                    </div>
                </div>

            </main>

        </Container>
    )
}

export default AudioBook;