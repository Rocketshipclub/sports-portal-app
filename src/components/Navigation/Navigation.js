import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

import classes from './Navigation.module.css';

const navigation = (props) => {
    return (
        <Navbar className={classes.bg}>
            <Navbar.Brand ><Link style={{textDecoration:'none', color:'black'}} to="/" exact="true">Sport Portal</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer className={classes.Link} to="/players" exact activeStyle={{color: '#2B2D42', borderBottom:'1px solid black'}}>
                    <Nav.Link>Players</Nav.Link>
                </LinkContainer>
                <LinkContainer className={classes.Link} to="/teams" exact activeStyle={{color: '#2B2D42', borderBottom:'1px solid black'}}>
                    <Nav.Link>Teams</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navigation;