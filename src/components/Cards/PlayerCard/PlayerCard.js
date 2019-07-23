import React from 'react';
import classes from '../GroupCard.module.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const playercard = (props) => {

    return (
        <Link style={{textDecoration:'none', color:'black'}} to={'/players/' + props.playerId}>
                <Card className={classes.card}>
                <Card.Img variant="top" className={classes.image} src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom:'5px'}}>Kills: {props.stats.kills}</Card.Subtitle>
                    <Card.Subtitle style={{paddingBottom:'5px'}}>Deaths: {props.stats.deaths}</Card.Subtitle>
                    <Card.Subtitle style={{paddingBottom:'5px'}}>Assists: {props.stats.assists}</Card.Subtitle>
                    <Card.Subtitle>KDA: {props.kda}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default playercard;