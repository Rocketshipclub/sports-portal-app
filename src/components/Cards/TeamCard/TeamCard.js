import React from 'react';
import Column from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import classes from '../GroupCard.module.css';
import { Link } from 'react-router-dom';


const teamcard = (props) => {
    return (
        <Column md={3} s={1}>
            <Link style={{textDecoration:'none', color:'black'}} to={'/teams/' + props.teamId}>
                <Card className={classes.card}>
                <Card.Img variant="top" className={classes.image} style={{padding:'5px'}} src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>Wins: {props.stats.wins}</Card.Subtitle>
                    <Card.Subtitle>Losses: {props.stats.losses}</Card.Subtitle>
                </Card.Body>
            </Card>
            </Link>
        </Column>   
    );
}

export default teamcard;