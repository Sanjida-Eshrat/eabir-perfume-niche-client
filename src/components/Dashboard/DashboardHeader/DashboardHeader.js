import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const DashboardHeader = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                <Navbar.Brand className="items"><span style={{color:'#CC2052'}}> Dashboard</span></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default DashboardHeader;