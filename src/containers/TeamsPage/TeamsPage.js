import React, { Component } from 'react';
import axios from 'axios';
import TeamCard from '../../components/Cards/TeamCard/TeamCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class TeamsPage extends Component{
    state = {
        teams: [],
      }
    
    componentDidMount() {
        axios.get('/api/teams')
            .then(response => {
                this.setState({teams: response.data});
            });
    }

    render(){
        const teams = this.state.teams.map(team => {
            return (
                <TeamCard key={team.teamId} 
                image={team.logo} 
                name={team.name} 
                stats={team.stats}
                short={team.short}
                teamId={team.teamId}
                />)
        }).reverse(); // reverse the final array because firebase returns players in ascending order

        return (
            <Container>
                <Row>
                    {teams}
                </Row>
            </Container>
        );
    };
}

export default TeamsPage;