import React, { Component } from 'react';
import axios from 'axios';
import Team from '../../components/Teams/TeamCard/TeamCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class TeamsPage extends Component{
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
        const teams = this.state.teams.map(team => {
            return <Team key={team.teamId} 
                image={team.logo} 
                name={team.name} 
                stats={team.stats}
                />
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