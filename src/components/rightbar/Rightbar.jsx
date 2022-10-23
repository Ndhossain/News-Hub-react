import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { Button, ButtonGroup, Nav } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

function Rightbar() {
    const googleProvider = new GoogleAuthProvider();
    const { authProviderLogin } = useAuth();

    const handleGooglelogin = () => {
        authProviderLogin(googleProvider);
    };
    return (
        <div>
            <ButtonGroup vertical style={{ gap: '12px' }} className="w-100">
                <Button onClick={handleGooglelogin} variant="outline-primary" className="rounded">
                    Log In Via Google
                </Button>
                <Button variant="outline-dark" className="rounded">
                    Log In Via Github
                </Button>
            </ButtonGroup>
            <div className="mt-3">
                <h5>Find Us On</h5>
                <Nav className="flex-column" style={{ gap: '8px' }}>
                    <Nav.Link className="border border-dark text-dark">Facebook</Nav.Link>
                    <Nav.Link className="border border-dark text-dark">Instagram</Nav.Link>
                    <Nav.Link className="border border-dark text-dark">Twitter</Nav.Link>
                    <Nav.Link className="border border-dark text-dark">Linkedin</Nav.Link>
                    <Nav.Link className="border border-dark text-dark">Github</Nav.Link>
                    <Nav.Link className="border border-dark text-dark">Privacey Policy</Nav.Link>
                    <Nav.Link className="border border-dark text-dark">Terms & Conditions</Nav.Link>
                </Nav>
            </div>
        </div>
    );
}

export default Rightbar;
