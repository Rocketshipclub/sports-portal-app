import React, { Component } from 'react';
import axios from 'axios';
import Player from '../../components/Players/Player/Player';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class PlayerPage extends Component{
    state = {
        teams: [],
      }
    
    componentDidMount() {
        axios.get('http://localhost:3001/api/teams')
            .then(response => {
                this.setState({teams: response.data});
            });
    }

    render(){
        const players = this.state.teams.map(team => {
            return <Player key={team.playerId} 
                image={team.image} 
                name={team.name} 
                stats={team.stats}
                />
        }).reverse(); // reverse the final array because firebase returns players in ascending order

        return (<Container>
            <Row>
                {teams}
            </Row>
        </Container>);
    };
}

export default PlayerPage;