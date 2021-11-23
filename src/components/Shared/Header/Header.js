import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
import newLogo from '../../../images/logo2.jpg';

const Header = () => {
    const {user,logout} = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand className="items">
                    <img
                        src={newLogo}
                        width="35"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />{' '} 
                    <span style={{color:'#CC2052'}}>Eabir</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <NavLink to="/home" className="items"><li> Home</li></NavLink>
                <NavLink to="/explore" className="items"><li> Explore</li></NavLink>
                    {
                        user?.email && <NavLink to="/dashboard" className="items"><li> Dashboard</li></NavLink>
                    }
                    {
                        user.email && <span className="text-dark fw-bold ms-3 items">{user.displayName}</span>
                    }
                    
                    {
                        user?.email?
   
                        <Button className="text-white fs-6 ms-3 border-light fw-bold btn btn-sm btn-warning items" style={{backgroundColor:'#CC2052'}} onClick={logout}>Logout </Button>
                        :
                        <NavLink className="text-decoration-none text-white fs-6 ms-3 fw-bold btn btn-info  btn-sm items" to="/login"><i class="fas fa-sign-in-alt"></i> Login</NavLink>
                    } 
                </Nav>
                </Navbar.Collapse>   
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;