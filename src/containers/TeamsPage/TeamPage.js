import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import PlayerCard from '../../components/Cards/PlayerCard/PlayerCard';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

class TeamPage extends Component {
    state = {
        name: '',
        logo: '',
        players: [],
        short: '',
        wins: '',
        losses: '',
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        let data = await axios.get('http://localhost:3001/api/teams/' + this.props.match.params.id);

        let playerData = await axios.get('http://localhost:3001/api/teams/' + this.props.match.params.id 
                        + '/players');
        
        this.setState({
                name: data.data.name,
                logo: data.data.logo,
                short: data.data.stats.short,
                wins: data.data.stats.wins,
                losses: data.data.stats.losses,
                players: playerData.data
        });
    }
    
    render() {
        let players = this.state.players.map(player => {
            return (
            <Column md={2}>
                <PlayerCard
                image={player.image} 
                name={player.name} 
                stats={player.stats}
                playerId={player.playerId}/></Column>
            )});
        return (
            <Container>
                <Jumbotron>
                <Row>
                    <Column md={1} s={2}>
                        <Image src={this.state.logo} fluid/>
                    </Column>
                    <h1>{this.state.name}</h1>
                </Row>
                </Jumbotron>
                <Row>
                    {players}
                </Row>
                <Row>
                    <Column>
                        <p>Load the team bio here</p>
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default TeamPage;