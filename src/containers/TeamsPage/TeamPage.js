import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';

import PlayerCard from '../../components/Players/PlayerCard/PlayerCard';

class TeamPage extends Component {
    state = {
        name: '',
        logo: '',
        players: [],
        short: '',
        wins: '',
        losses: '',
        loading: false,
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        this.setState({ loading: true });
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
        this.setState({ loading: false })
    }
    
    render() {
        let players = this.state.players.map(player => {
            return (
                <PlayerCard 
                image={player.image} 
                name={player.name} 
                stats={player.stats}
                playerId={player.playerId}/>
            )});
        return (
            <div>
                { this.state.loading === true ? 
                ( <div>Loading...</div> ) : 
                ( <Container>
                        <Row>
                            <Column s={6}>
                                <h1>{this.state.name}</h1>
                                <img src={this.state.logo} />
                            </Column>
                            {players}
                        </Row>
                  </Container> )}
            </div>
        );
    }
}

export default TeamPage;