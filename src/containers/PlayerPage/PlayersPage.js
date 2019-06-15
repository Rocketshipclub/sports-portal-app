import React, { Component } from 'react';
import axios from 'axios';
import PlayerCard from '../../components/Players/PlayerCard/PlayerCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

class PlayersPage extends Component{
    state = {
        players: [],
        selectedPlayer: 'doublelift'
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
                <Link style={{textDecoration:'none', color:'black'}} to={'/players/' + player.playerId}>
                <PlayerCard 
                image={player.image} 
                name={player.name} 
                stats={player.stats}
                playerId={player.playerId}
                click={() => this.playerSelectedHandler}/>
                </Link>
        )}).reverse(); // reverse the final array because firebase returns players in ascending order

        return (
        <Container>
            <Row>{players}</Row>
        </Container>);
    };
}

export default PlayersPage;