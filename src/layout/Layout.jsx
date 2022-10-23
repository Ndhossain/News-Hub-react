import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import LeftNavbar from '../components/leftbar/LeftNavbar';
import Rightbar from '../components/rightbar/Rightbar';

function Layout() {
    return (
        <>
            <Header />
            <Container className="mt-5">
                <Row>
                    <Col lg={2}>
                        <LeftNavbar />
                    </Col>
                    <Col lg={7}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <Rightbar />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Layout;
