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
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navigation;