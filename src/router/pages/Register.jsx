import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Register() {
    const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });
    const { createUser, error } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(userInfo.email, userInfo.password, userInfo.name, () => {
            navigate(from);
        });
    };

    return (
        <div
            style={{ minHeight: '100vh' }}
            className="row justify-content-center align-items-center container mx-auto"
        >
            <div
                style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                className="p-4 col-12 col-xs-10 col-sm-7 col-lg-5 rounded"
            >
                <h1 className="text-primary text-center">
                    <Link className="text-decoration-none" to="/">
                        News Hub
                    </Link>
                </h1>
                <h4 className="text-center">Register Now</h4>
                <Form onSubmit={handleSubmit}>
                    <p className="text-danger">{error && error.message}</p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Full Name"
                            value={userInfo.name}
                            onChange={(e) => {
                                setUserInfo({ ...userInfo, name: e.target.value });
                            }}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={userInfo.email}
                            onChange={(e) => {
                                setUserInfo({ ...userInfo, email: e.target.value });
                            }}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={userInfo.password}
                            onChange={(e) => {
                                setUserInfo({ ...userInfo, password: e.target.value });
                            }}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="I Accept the Terms & Conditions"
                            checked={userInfo.checked}
                            name="condition"
                            onClick={(e) => !e.target.checked}
                            required
                        />
                    </Form.Group>

                    <Button className="w-100" variant="primary" type="submit">
                        Register
                    </Button>
                    <Form.Text className="text-muted d-block">
                        Already Have a Account. <Link to="/login">Log In</Link> Now.
                    </Form.Text>
                </Form>
                <p className="mt-2 text-center">
                    <Link to="/">Go back to home</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
