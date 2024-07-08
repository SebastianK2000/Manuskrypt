import logo from '../assets/logo.svg';
import magnifier from '../assets/magnifier.svg';
import basket from '../assets/basket.svg';
import account from '../assets/account.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import gmail from '../assets/gmail.svg';

import { Outlet, useLocation } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StickyNav from 'react-sticky-nav';
import '../index.css';
import '../style/layout.css';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import classNames from 'classnames';
import backgroundImage from '../assets/Frame.svg';

export function Layout() {
    const location = useLocation();
    const isPageNotFound = location.pathname === '/PageNotFound';
    const isLogin = location.pathname === '/Login';
    const isRegister = location.pathname === '/Register';

    const containerStyles = {
        backgroundImage: { backgroundImage },
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    };

    switch (true) {

        case isPageNotFound:
            return <PageNotFound />;

        case isLogin:
            return <Login />;

        case isRegister:
            return <Register />;

        default:
            return (
                <StickyNav style={containerStyles}>
                    <Navbar className={classNames('stickyNav', 'styleNav')}>
                    <Container fluid className="containerFluidStyle">
                    <Navbar.Brand>
                                <Link to="App">
                                    <img
                                        className="logo"
                                        src={logo}
                                    />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle style={{ backgroundColor: 'white' }} />
                            <Navbar.Collapse style={{ backgroundColor: '#Af4f4f4' }}>
                                <Nav
                                    style={{ backgroundColor: '#f4f4f4', maxHeight: '100px' }}

                                >

                                    <Nav.Link><Link className={classNames('navMainSite', 'linkStyle')} to="App">Home</Link></Nav.Link>
                                    <Nav.Link><Link className={classNames('navMainSite', 'linkStyle')} to="/AudioBook">Ebooki & audiobooki</Link></Nav.Link>
                                    <Nav.Link><Link className={classNames('navMainSite', 'linkStyle')} to="Books">Books</Link></Nav.Link>
                                    <Nav.Link><Link className={classNames('navMainSite', 'linkStyle')} to="Gifts">Gift</Link></Nav.Link>
                                    <Nav.Link><Link className={classNames('navMainSite', 'linkStyle')} to="Download">Download</Link></Nav.Link>
                                    <Nav.Link><Link className={classNames('navMainSite', 'linkStyle')} to="Price">Price</Link></Nav.Link>
                                </Nav>

                                <Form className={classNames('formDflexStyle', 'd-flex')}>
                                    <Form.Control className={classNames('formConstolStyle', 'me-2')}
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />

                                    <Button className={classNames('iconSocialMediaHover', 'icons')} style={{ backgroundColor: 'rebeccapurple' }} variant="outline-secondary">
                                        <img className={classNames('search', 'imageStyles')} src={magnifier} />
                                    </Button>

                                    <Button className={classNames('iconSocialMediaHover', 'icons')} style={{ backgroundColor: 'rebeccapurple' }} variant="outline-secondary">
                                        <Link to='Cart'>
                                            <img className={classNames('basket', 'imageStyles')} src={basket} />
                                        </Link>
                                    </Button>

                                    <Button className={classNames('icons')} style={{ backgroundColor: 'rebeccapurple', boxShadow: '16px 16px 26px -20px rgba(66, 68, 90, 1)' }} variant="outline-secondary">
                                        <img style={{ position: 'relative', left: '5px' }} className="account, imageStyles" src={account} />
                                        <Dropdown style={{ width: '10px', height: '30px', position: 'relative', top: '5px', right: '50px' }}>
                                            <Dropdown.Toggle style={{ width: '40px', height: '10px', position: 'relative',top: '-3px', backgroundColor: 'transparent', borderStyle: 'none' }} variant="secondary" id="dopdown-basic">

                                            </Dropdown.Toggle>

                                            <Dropdown.Menu style={{ position: 'relative', top: '-20px', left: '-70px', width: '10px' }}>
 
                                                <Dropdown.Item style={{ textDecoration: 'none', color: 'black', display: 'inline-block', width: '100%' }}>
                                                    <Link style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none', color: 'inherit' }} to='Login'>Log in</Link>
                                                </Dropdown.Item>

                                                <Dropdown.Item style={{ textDecoration: 'none', color: 'black', display: 'inline-block', width: '100%' }}>
                                                    <Link style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none', color: 'inherit' }} to="Register">Register</Link>
                                                </Dropdown.Item>

                                                <Dropdown.Item style={{ textDecoration: 'none', color: 'black', display: 'inline-block', width: '100%' }}>
                                                    <Link style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none', color: 'inherit' }} to="Settings">Settings</Link>
                                                </Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Button>


                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <main className='content'>
                        <Outlet />
                    </main>

                    <footer className={classNames('content', 'footer')} style={{ margin: '0' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <h5 style={{ position: 'relative', left: '100px' }}>Ebooki & audiobooki</h5>
                                    <ul style={{ position: 'relative', left: '100px' }} className="list-unstyled">
                                        <li><a className='footerText'> <Link className={classNames('footerHoverText', 'linkStyle')} to="Gifts">Gift</Link></a></li>
                                        <li><a className='footerText'> <Link className={classNames('footerHoverText', 'linkStyle')} to="Price">Price</Link></a></li>
                                        <li><a className='footerText'> <Link className={classNames('footerHoverText', 'linkStyle')} to="Books">Books</Link></a></li>
                                        <li><a className='footerText'> <Link className={classNames('footerHoverText', 'linkStyle')} to="Download">Download app!</Link></a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h5 style={{ position: 'relative', left: '200px' }}>Information</h5>
                                    <ul style={{ position: 'relative', left: '200px' }} className="list-unstyled">
                                        <li><a className='footerText'> <Link className={classNames('footerHoverText', 'linkStyle')} to="Blog">Blog</Link></a></li>
                                        <li><a className='footerText'> <Link className={classNames('footerHoverText', 'linkStyle')} to="Help">Help</Link></a></li>
                                        <li><a className='footerText'> <Link className={classNames('footerHoverText', 'linkStyle')} to="Regulations">Regulations</Link></a></li>
                                        <li><a className='footerText'> <Link className={classNames('footerHoverText', 'footerText')} to="FAQ">FAQ</Link></a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3" style={{ display: 'flex', alignItems: 'center' }}>
                                    <h5 style={{ position: 'relative', top: '-70px', left: '320px' }}>Contact</h5>
                                    <ul style={{ display: 'flex', flexDirection: 'row' }}>

                                        <Link to="/PageNotFound">
                                        <img className={classNames('iconSocialMediaHover', 'socialIcon', 'allCursorPointer')}
                                            src={instagram}
                                            alt="Instagram"
                                            />
                                        </Link>

                                        <Link to="/PageNotFound">
                                        <img className={classNames('iconSocialMediaHover', 'socialIcon', 'allCursorPointer')}
                                            src={facebook}
                                            alt="Facebook"
                                            />
                                        </Link>

                                        <Link to="/PageNotFound">
                                        <img className={classNames('iconSocialMediaHover', 'socialIcon', 'allCursorPointer')}
                                            src={twitter}
                                            alt="Twitter"
                                            />
                                        </Link>

                                        <Link to="/PageNotFound">
                                            <img className={classNames('iconSocialMediaHover', 'socialIcon', 'allCursorPointer')}
                                            style={{ height: '55px', width: '60px' }}
                                            src={gmail}
                                            alt="Gmail"
                                            />
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="text-center py-3" style={{ borderTop: '1px solid #dee2e6' }}>
                            &copy; 2009-2024 Manuskrypt S.A. All rights reserved.
                            <p>Page version: 2.0.1</p>
                        </div>
                    </footer>
                </StickyNav>
            );
    }
}

export default Layout;
