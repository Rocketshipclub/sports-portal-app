import React from 'react';
import Column from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const teamcard = (props) => {
    return (
        <Column md={3} s={1}>
                <Card style={{width: '12rem', padding:'5px'}}>
                <Card.Img variant="image" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>Wins: {props.stats.wins}</Card.Subtitle>
                    <Card.Subtitle>Losses: {props.stats.losses}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Column>   
    );
}

export default teamcard;