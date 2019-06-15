import React, { Component } from 'react';
import axios from 'axios';
import Player from '../../components/Players/PlayerCard/PlayerCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class PlayerPage extends Component{
    state = {
        players: [],
      }
    
    componentDidMount() {
        axios.get('http://localhost:3001/api/players')
            .then(response => {
                this.setState({players: response.data});
            });
    }

    render(){
        const players = this.state.players.map(player => {
            return <Player key={player.playerId} 
                image={player.image} 
                name={player.name} 
                stats={player.stats}
                />
        }).reverse(); // reverse the final array because firebase returns players in ascending order

        return (
        <Container>
            <Row>{players}</Row>
        </Container>);
    };
}

export default PlayerPage;