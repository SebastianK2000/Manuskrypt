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

export function Layout() {
    const location = useLocation();
    const isPageNotFound = location.pathname === '/PageNotFound';
    const isLogin = location.pathname === '/Login';
    const isRegister = location.pathname === '/Register';

    switch (true) {

        case isPageNotFound:
            return <PageNotFound />;

        case isLogin:
            return <Login />;

        case isRegister:
            return <Register />;

        default:
            return (
                <StickyNav>
                    <Navbar className={classNames('stickyNav', 'styleNav')}>
                        <Container fluid className="containerFluidStyle">
                            <Navbar.Brand>
                                <Link to="Home">
                                    <img
                                        className="logo"
                                        src="../Resources/logo.svg"
                                    />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle style={{ backgroundColor: 'white' }} />
                            <Navbar.Collapse style={{ backgroundColor: '#Af4f4f4' }}>
                                <Nav
                                    style={{ backgroundColor: '#f4f4f4', maxHeight: '100px' }}

                                >

                                    <Nav.Link><Link className={classNames('navMainSite', 'linkStyle')} to="Home">Home</Link></Nav.Link>
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

                                    <Button className={classNames('iconSocialMediaHover', 'icons')} variant="outline-secondary">
                                        <img className={classNames('search', 'imageStyles')} src='../Resources/magnifier.svg' />
                                    </Button>

                                    <Button className={classNames('iconSocialMediaHover', 'icons')} style={{ backgroundColor: 'rebeccapurple' }} variant="outline-secondary">
                                        <Link to='Cart'>
                                            <img className={classNames('basket', 'imageStyles')} src='../Resources/Basket.svg' />
                                        </Link>
                                    </Button>

                                    <Button className={classNames('iconSocialMediaHover', 'icons')} style={{ backgroundColor: 'rebeccapurple', boxShadow: '16px 16px 26px -20px rgba(66, 68, 90, 1)' }} variant="outline-secondary">
                                        <img style={{ position: 'relative', left: '5px' }} className="account, imageStyles" src='../Resources/Account.svg' />
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
                                        <li><a className='footerText'> <Link className={classNames('footerHoverText', 'linkStyle')} to="Gift">Gift</Link></a></li>
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
                                        <img className={classNames('iconSocialMediaHover', 'socialIcon', 'allCursorPointer')}
                                            src="../Resources/instagram.svg"
                                            alt="Instagram"
                                            onClick={() => window.location.href = "PageNotFound"}
                                        />
                                        <img className={classNames('iconSocialMediaHover', 'socialIcon', 'allCursorPointer')}
                                            src="../Resources/facebook.svg"
                                            alt="Facebook"
                                            onClick={() => window.location.href = "PageNotFound"}
                                        />
                                        <img className={classNames('iconSocialMediaHover', 'socialIcon', 'allCursorPointer')}
                                            src="../Resources/twitter.svg"
                                            alt="Twitter"
                                            onClick={() => window.location.href = "PageNotFound"}
                                        />
                                        <img className={classNames('iconSocialMediaHover', 'socialIcon', 'allCursorPointer')}
                                            style={{ height: '55px', width: '60px' }}
                                            src="../Resources/gmail.svg"
                                            alt="Gmail"
                                            onClick={() => window.location.href = "PageNotFound"}
                                        />
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="text-center py-3" style={{ borderTop: '1px solid #dee2e6' }}>
                            &copy; 2009-2024 Manuskrypt S.A. All rights reserved.
                            Page version: 1.8 Remote
                        </div>
                    </footer>
                </StickyNav>
            );
    }
}

export default Layout;
