import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const iconDownload = {
    width: '250px',
    height: '70px',
    backgroundColor: 'black',
    cursor: 'pointer',
    borderRadius: '20px',
    margin: '10px',
    position: 'relative',
    right: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

};

const fonts = {
    fontSize: '30px'
};

const downLeftSide = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '100px 100px 55px 100px',
    position: 'relative',
    top: '-420px'
};

const doubleDownLeftSide = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0px 100px',
    position: 'relative',
    top: '-420px'
};

const companyDownloadText = {
    color: 'white',
    fontSize: '20px',
    margin: '10px',
    position: 'relative',
    right: '30px'

};

const imgStyleDownload = {
    color: 'white',
    fontSize: '10px',
    margin: '10px',
    height: '40px',
    position: 'relative',
    right: '30px'
};

const laptop = {
    margin: '10px',
};

const systemPc = {
    cursor: 'pointer',
    textDecoration: 'underline',
};


function Download() {
    return (
        <Container>
            <main style={{ overflowX: 'hidden' }}>
                <div style={{ height: '1100px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', position: 'relative', }}>
                        <div style={{position: 'relative', top: '100px'}}>
                        <h1 style={fonts}>Download App Manuskrypt</h1>
                            <p>Available for all the most popular ebook readers and operating systems.</p>

                            <div style={iconDownload}>
                                <img style={imgStyleDownload} src="../Resources/huawei.png" alt="AppGallery" />
                                <p style={companyDownloadText} >Download in <br /> AppGallery</p>
                            </div>

                            <div style={iconDownload}>
                                <img style={imgStyleDownload} src="../Resources/google.png" alt="Google Play" />
                                <p style={companyDownloadText} >Download in <br /> Google Play</p>
                            </div>

                            <div style={iconDownload}>
                                <img style={imgStyleDownload} src="../Resources/apple.png" alt="App Store" />
                                <p style={companyDownloadText} >Download in <br /> App Store</p>
                            </div>

                            <div style={iconDownload}>
                                <img style={imgStyleDownload} src="../Resources/microsoft.png" alt="Microsoft Store" />
                                <p style={companyDownloadText}>Download in <br /> Microsoft</p>
                            </div>

                    </div>
                </div>

                    <div style={{ display: 'flex', position: 'relative', top: '-400px', right: '100px'}}>
                        <img style={{ display: 'flex' }} src="../Resources/mockup.png" alt="Mockup smartphone/Kingle" />
                    </div>
                    <div style={downLeftSide}>
                        <h2 style={fonts}>Sync your Kindle or PocketBook e-reader</h2>
                        <p>The service is available for owners of Kindle Touch, 7, 8, 10, 11, Paperwhite 1-5, Voyage, Oasis 1-3 and Scribe models. Download the dedicated application to your computer.</p>
                        <div>
                            <p style={systemPc}><img style={laptop} src="../Resources/laptop.png" alt="Computer Windows" />Windows 64bit application (7 SP1, 8 or 10)</p>
                            <p style={systemPc}><img style={laptop} src="../Resources/appleLaptop.png" alt="Computer macOS" />App for macOS (10.9 and up)</p>
                        </div>
                    </div>

                    <div style={doubleDownLeftSide}>
                        <h2>Download the Legimi app for your e-reader</h2>
                        <p>We guarantee that the following reader models correctly support the ebook subscription service. They have been thoroughly tested by us in this regard, and the Legimi application is fully compatible with them.</p>
                    </div>
            </div>
          </main>

            <Outlet />
        </Container>
    );
}

export default Download;
