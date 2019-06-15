import React from 'react';
import classes from './PlayerCard.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const playercard = (props) => {
    return (
        <Column md={3} s={1}>
                <Card style={{width: '13em'}} onClick={() => props.click(props.playerId)}>
                <Card.Img variant="image" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>Kills: {props.stats.kills}</Card.Subtitle>
                    <Card.Subtitle>Deaths: {props.stats.deaths}</Card.Subtitle>
                    <Card.Subtitle>Assists: {props.stats.assists}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Column>
    );
}

export default playercard;