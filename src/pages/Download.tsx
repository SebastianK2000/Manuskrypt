import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import '../style/download.css';
import { Link } from 'react-router-dom';

import huawei from "../assets/huawei.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import microsoft from "../assets/microsoft.png";
import mockup from "../assets/mockup.png";
import laptop from "../assets/laptop.png";
import appleLaptop from "../assets/appleLaptop.png";

function Download() {
    return (
        <Container>
            <main style={{ overflowX: 'hidden' }}>
                <div style={{ height: '1100px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', position: 'relative' }}>
                        <div style={{ position: 'relative', top: '100px' }}>
                            <h1 className="fonts">Download App Manuskrypt</h1>
                            <p>Available for all the most popular ebook readers and operating systems.</p>

                            <Link style={{ textDecoration: 'none' }} to="/PageNotFound">
                                <button className="iconDownload">
                                    <img className="imgStyleDownload" src={huawei} alt="AppGallery" />
                                    <p className="companyDownloadText">Download in <br /> AppGallery</p>
                                </button>
                            </Link>

                            <Link style={{ textDecoration: 'none' }} to="/PageNotFound">
                                <button className="iconDownload">
                                    <img className="imgStyleDownload" src={google} alt="Google Play" />
                                    <p className="companyDownloadText">Download in <br /> Google Play</p>
                                </button>
                            </Link>

                            <Link style={{ textDecoration: 'none' }} to="/PageNotFound">
                                <button className="iconDownload">
                                    <img className="imgStyleDownload" src={apple} alt="App Store" />
                                    <p className="companyDownloadText">Download in <br /> App Store</p>
                                </button>
                            </Link>

                            <Link style={{ textDecoration: 'none' }} to="/PageNotFound" className="icon-download">
                                <button className="iconDownload">
                                    <img className="imgStyleDownload" src={microsoft} alt="Microsoft Store" />
                                    <p className="companyDownloadText">Download in <br /> Microsoft</p>
                                </button>
                            </Link>

                        </div>
                    </div>

                    <div style={{ display: 'flex', position: 'relative', top: '-400px', right: '100px' }}>
                        <img style={{ display: 'flex' }} src={mockup} alt="Mockup smartphone/Kingle" />
                    </div>
                    <div className="downLeftSide">
                        <h2 className="styles.fonts">Sync your Kindle or PocketBook e-reader</h2>
                        <p>The service is available for owners of Kindle Touch, 7, 8, 10, 11, Paperwhite 1-5, Voyage, Oasis 1-3 and Scribe models. Download the dedicated application to your computer.</p>
                        <div>

                            <Link to="/PageNotFound">
                                <p className="systemPc"><img className="laptop" src={laptop} alt="Computer Windows" />Windows 64bit application (7 SP1, 8 or 10)</p>
                            </Link>

                            <Link to="/PageNotFound">
                                <p className="systemPc"><img className="laptop" src={appleLaptop} alt="Computer macOS" />App for macOS (10.9 and up)</p>
                            </Link>

                        </div>
                    </div>

                    <div className="doubleDownLeftSide">
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
