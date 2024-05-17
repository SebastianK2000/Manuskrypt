import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StickyNav from 'react-sticky-nav';
import '../index.css';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';

const imageStyles = {
    width: '30px',
    height: '30px',
    margin: '20px',
    cursor: 'pointer',
};

const icons = {
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px',
    borderRadius: '30%',
    position: 'relative',
    right: '-90px',
    top: '-40px',
};

const styleNav = {
    backgroundColor: 'white',
};


const content = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    width: 'auto'
};


const footerText = {
    fontSize: '20px',
    color: 'black',
    textDecoration: 'none'
};

const footer = {
    backgroundColor: '#f4f4f4',
    margin: '20px',
    width: 'auto',
};

const socialIcon = {
    width: '50px',
    padding: '10px',
    margin: '10px',
    cursor: 'pointer',
    position: 'relative',
    left: '110px'
};

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
                    <Navbar className="stickyNav" style={{ ...styleNav, backgroundColor: '#f4f4f4', width: '100%', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)', margin: '0' }}>
                        <Container fluid style={{ borderRadius: '20px', height: '100px', width: "100%", backgroundColor: '#f4f4f4' }}>
                            <Navbar.Brand href="#">
                                <img
                                    className="logo"
                                    src="../Resources/logo.svg"
                                    style={{ position: 'relative', top: '5px', right: '-10px', width: '300px', height: "100px" }}
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle style={{ backgroundColor: 'white' }} />
                            <Navbar.Collapse style={{ backgroundColor: '#Af4f4f4' }}>
                                <Nav
                                    style={{ backgroundColor: '#f4f4f4', maxHeight: '100px' }}

                                >

                                    <Nav.Link><Link className="navMainSite" style={{ textDecoration: 'none', color: 'black' }} to="Login">Home</Link></Nav.Link>
                                    <Nav.Link><Link className="navMainSite" style={{ textDecoration: 'none', color: 'black' }} to="/AudioBook">Ebooki & audiobooki</Link></Nav.Link>
                                    <Nav.Link><Link className="navMainSite" style={{ textDecoration: 'none', color: 'black' }} to="Books">Books</Link></Nav.Link>
                                    <Nav.Link><Link className="navMainSite" style={{ textDecoration: 'none', color: 'black' }} to="Gifts">Gift</Link></Nav.Link>
                                    <Nav.Link><Link className="navMainSite" style={{ textDecoration: 'none', color: 'black' }} to="Download">Download</Link></Nav.Link>
                                    <Nav.Link><Link className="navMainSite" style={{ textDecoration: 'none', color: 'black' }} to="Price">Price</Link></Nav.Link>
                                </Nav>

                                <Form style={{ backgroundColor: 'hidden', width: '0px', height: '0px' }} className="d-flex">
                                    <Form.Control
                                        style={{ height: '50px', width: '200px', position: 'relative', right: '-60px', top: '-25px' }}
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />

                                    <Button className="iconSocialMediaHover" style={{ ...icons, backgroundColor: 'rebeccapurple' }} variant="outline-secondary">
                                        <img style={imageStyles} className="search" src='../Resources/magnifier.svg' />
                                    </Button>

                                    <Button className="iconSocialMediaHover" style={{ ...icons, backgroundColor: 'rebeccapurple' }} variant="outline-secondary">
                                        <Link to='Cart'>
                                            <img style={imageStyles} className="basket" src='../Resources/Basket.svg' />
                                        </Link>
                                    </Button>

                                    <Button className="iconSocialMediaHover" style={{ ...icons, backgroundColor: 'rebeccapurple', boxShadow: '16px 16px 26px -20px rgba(66, 68, 90, 1)' }} variant="outline-secondary">
                                        <img style={{ ...imageStyles, position: 'relative', left: '5px' }} className="account" src='../Resources/Account.svg' />
                                        <Dropdown style={{ width: '10px', height: '30px', position: 'relative', top: '5px', right: '50px' }}>
                                            <Dropdown.Toggle style={{ width: '40px', height: '10px', position: 'relative', backgroundColor: 'transparent', borderStyle: 'none' }} variant="secondary" id="dopdown-basic">

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

                    <main style={content}>
                        <Outlet />
                    </main>

                    <footer style={{ ...content, ...footer, margin: '0' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <h5 style={{ position: 'relative', left: '100px' }}>Ebooki & audiobooki</h5>
                                    <ul style={{ position: 'relative', left: '100px' }} className="list-unstyled">
                                        <li><a style={footerText}> <Link className="footerHoverText" style={{ textDecoration: 'none', color: 'black' }} to="Gift">Gift</Link></a></li>
                                        <li><a style={footerText}> <Link className="footerHoverText" style={{ textDecoration: 'none', color: 'black' }} to="Price">Price</Link></a></li>
                                        <li><a style={footerText}> <Link className="footerHoverText" style={{ textDecoration: 'none', color: 'black' }} to="Books">Books</Link></a></li>
                                        <li><a style={footerText}> <Link className="footerHoverText" style={{ textDecoration: 'none', color: 'black' }} to="Download">Download app!</Link></a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h5 style={{ position: 'relative', left: '200px' }}>Information</h5>
                                    <ul style={{ position: 'relative', left: '200px' }} className="list-unstyled">
                                        <li><a style={footerText}> <Link className="footerHoverText" style={{ textDecoration: 'none', color: 'black' }} to="Blog">Blog</Link></a></li>
                                        <li><a style={footerText}> <Link className="footerHoverText" style={{ textDecoration: 'none', color: 'black' }} to="Help">Help</Link></a></li>
                                        <li><a style={footerText}> <Link className="footerHoverText" style={{ textDecoration: 'none', color: 'black' }} to="Regulations">Regulations</Link></a></li>
                                        <li><a style={footerText}> <Link className="footerHoverText" style={{ ...footerText }} to="FAQ">FAQ</Link></a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3" style={{ display: 'flex', alignItems: 'center' }}>
                                    <h5 style={{ position: 'relative', top: '-70px', left: '320px' }}>Contact</h5>
                                    <ul style={{ display: 'flex', flexDirection: 'row' }}>
                                        <img className="iconSocialMediaHover"
                                            style={{ ...socialIcon, cursor: 'pointer' }}
                                            src="../Resources/instagram.svg"
                                            alt="Instagram"
                                            onClick={() => window.location.href = "PageNotFound"}
                                        />
                                        <img className="iconSocialMediaHover"
                                            style={{ ...socialIcon, cursor: 'pointer' }}
                                            src="../Resources/facebook.svg"
                                            alt="Facebook"
                                            onClick={() => window.location.href = "PageNotFound"}
                                        />
                                        <img className="iconSocialMediaHover"
                                            style={{ ...socialIcon, cursor: 'pointer' }}
                                            src="../Resources/twitter.svg"
                                            alt="Twitter"
                                            onClick={() => window.location.href = "PageNotFound"}
                                        />
                                        <img className="iconSocialMediaHover"
                                            style={{ ...socialIcon, cursor: 'pointer', height: '55px', width: '60px' }}
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
                        </div>
                    </footer>
                </StickyNav>
            );
    }
}

export default Layout;
