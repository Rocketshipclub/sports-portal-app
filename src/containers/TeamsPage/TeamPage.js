import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';

import PlayerCard from '../../components/Cards/PlayerCard/PlayerCard';
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
        let data = await axios.get('/api/teams/' + this.props.match.params.id);

        let playerData = await axios.get('/api/teams/' + this.props.match.params.id 
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
                <Row>
                    <Column md={1} s={2}>
                        <Image src={this.state.logo} fluid/>
                    </Column>
                    <h1>{this.state.name}</h1>
                </Row>
                <Row>
                    <Column>
                        <p style={{padding:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Column>
                </Row>
                <Row>
                    {players}
                </Row>
            </Container>
        );
    }
}

export default TeamPage;