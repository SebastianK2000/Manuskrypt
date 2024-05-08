import React from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';

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
    right: '150px',
};

const styleNav = {
    borderRadius: '20px',
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
    borderRadius: '20px',
    margin: '20px',
    width: 'auto',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)'
};

const socialIcon = {
    width: '50px',
    padding: '10px',
    margin: '10px',
    cursor: 'pointer',
    position: 'relative',
    left: '110px'
}

export function Layout() {
    return (
        <Container style={{ width: '100%', height: '100%', overflowX: 'hidden' }}>
            <Navbar style={{ ...styleNav, backgroundColor: '#f4f4f4', width: '100%', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)' }}>
                <Container fluid style={{ borderRadius: '20px', height: '100px', width: "100%", backgroundColor: '#f4f4f4' }}>
                    <Navbar.Brand href="#">
                        <img
                            className="logo"
                            src="../Resources/logo.svg"
                            style={{ position: 'relative', top: '45px', right: '110px', width: '500px', height: "500px" }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor: 'white' }} aria-controls="navbarScroll" />
                    <Navbar.Collapse style={{ backgroundColor: '#f4f4f4', width: '0px' }} id="navbarScroll">
                        <Nav
                            style={{ backgroundColor: '#f4f4f4', position: 'relative', right: '230px', maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link><Link style={{ textDecoration: 'none', color: 'black' }} to="Register">Home</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none', color: 'black' }} to="/AudioBook">Ebooki & audiobooki</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none', color: 'black' }} to="Books">Books</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none', color: 'black' }} to="Gifts">Gift</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none', color: 'black' }} to="Download">Download</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none', color: 'black' }} to="Price">Price</Link></Nav.Link>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                style={{ height: '50px', width: '200px', position: 'relative', right: '180px', top: '15px' }}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button style={{ ...icons, backgroundColor: 'rebeccapurple' }} variant="outline-secondary">
                                <img style={imageStyles} className="search" src='../Resources/magnifier.svg' />
                            </Button>
                            <Button style={{ ...icons, backgroundColor: 'rebeccapurple' }} variant="outline-secondary">
                                <img style={imageStyles} className="basket" src='../Resources/Basket.svg' />
                            </Button>
                            <Button style={{ ...icons, backgroundColor: 'rebeccapurple' }} variant="outline-secondary">
                                <img style={imageStyles} className="basket" src='../Resources/Account.svg' />
                            </Button>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main style={content}>
                <Outlet />

            </main>

            <footer style={{ ...content, ...footer }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5 style={{ position: 'relative', left: '100px' }}>Ebooki & audiobooki</h5>
                            <ul style={{ position: 'relative', left: '100px' }} className="list-unstyled">
                                <li><a style={footerText}> <Link to="Gift">Gift</Link></a></li>
                                <li><a style={footerText}> <Link to="Price">Price</Link></a></li>
                                <li><a style={footerText}> <Link to="Books">Books</Link></a></li>
                                <li><a style={footerText}> <Link to="Download">Download app!</Link></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5 style={{ position: 'relative', left: '200px' }}>Information</h5>
                            <ul style={{ position: 'relative', left: '200px' }} className="list-unstyled">
                                <li><a style={footerText}> <Link to="Blog">Blog</Link></a></li>
                                <li><a style={footerText}> <Link to="Help">Help</Link></a></li>
                                <li><a style={footerText}> <Link to="Regulations">Regulations</Link></a></li>
                                <li><a style={footerText}> <Link to="FAQ">FAQ</Link></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3" style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ position: 'relative', top: '-70px', left: '320px' }}>Contact</h5>
                            <ul style={{ display: 'flex', flexDirection: 'row' }}>
                                <img style={socialIcon} src="../Resources/instagram.svg" alt="Instagram" />
                                <img style={socialIcon} src="../Resources/facebook.svg" alt="Facebook" />
                                <img style={socialIcon} src="../Resources/twitter.svg" alt="Twitter" />
                                <img style={{ ...socialIcon, height: '55px', width: '60px' }} src="../Resources/gmail.svg" alt="Gmail" />
                            </ul>
                        </div>


                    </div>
                </div>

                <div className="text-center py-3" style={{ borderTop: '1px solid #dee2e6' }}>
                    &copy; 2009-2024 Manuskrypt S.A. All rights reserved.
                </div>

            </footer>


        </Container>




    );
}

export default Layout;