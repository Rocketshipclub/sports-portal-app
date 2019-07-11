import React, { Component } from 'react';
import axios from 'axios';
import PlayerCard from '../../components/Cards/PlayerCard/PlayerCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Column from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

class PlayersPage extends Component{
    state = {
        players: [],
        selectedPlayer: ''
      }
    
    componentDidMount() {
        axios.get('http://localhost:3001/api/players')
            .then(response => {
                this.setState({players: response.data});
            });
    }

    playerSelectedHandler = (id) => {
        this.setState({selectedPlayer: id});
    }

    render(){
        const players = this.state.players.map(player => {
            return (
            <Column md={3}>
                <PlayerCard
                image={player.image} 
                name={player.name} 
                stats={player.stats}
                playerId={player.playerId}
                click={() => this.playerSelectedHandler}/></Column>
        )}).reverse(); // reverse the final array because firebase returns players in ascending order

        return (
        <Container>
            Sort by <Button>Kills</Button> <Button>Deaths</Button> <Button>Assists</Button> <Button>Team</Button>
            <Row style={{paddingTop:'16px'}}>
                <CardGroup>
                {players}
                </CardGroup>
            </Row>
        </Container>);
    };
}

export default PlayersPage;