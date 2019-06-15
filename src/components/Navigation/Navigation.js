import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

import classes from './Navigation.module.css';

const navigation = (props) => {
    return (
        <Navbar>
            <Navbar.Brand><Link to="/" exact="true">Sport Portal</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer className={classes.Link} to="/players" exact activeStyle={{color: '#fa923f'}}>
                    <Nav.Link>Players</Nav.Link>
                </LinkContainer>
                <LinkContainer className={classes.Link} to="/teams" exact activeStyle={{color: '#fa923f'}}>
                    <Nav.Link>Teams</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navigation;