import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Header() {
    const { currentUser, logoutUser } = useAuth();
    console.log(currentUser);
    return (
        <Navbar bg="primary" variant="dark" sticky="top">
            <Container>
                <Link to="/" className="navbar-brand">
                    <h3 className="mb-0">News Hub</h3>
                </Link>
                <Nav className="align-items-center">
                    {currentUser && currentUser?.uid ? (
                        <>
                            <Nav.Link>
                                <Image
                                    src={currentUser?.photoURL}
                                    roundedCircle
                                    style={{ height: '30px' }}
                                />
                            </Nav.Link>
                            <Nav.Link className="text-white">{currentUser?.displayName}</Nav.Link>
                            <Nav.Link onClick={() => logoutUser()} className="text-white">
                                Sign Out
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className="nav-link">
                                Log In
                            </NavLink>
                            <NavLink to="/register" className="nav-link">
                                Register
                            </NavLink>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
