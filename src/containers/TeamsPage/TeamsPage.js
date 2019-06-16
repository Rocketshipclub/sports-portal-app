import React, { Component } from 'react';
import axios from 'axios';
import TeamCard from '../../components/Teams/TeamCard/TeamCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';

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
            return (
                <Link style={{textDecoration:'none', color:'black'}} to={'/teams/' + team.teamId}>
                <TeamCard key={team.teamId} 
                image={team.logo} 
                name={team.name} 
                stats={team.stats}
                short={team.short}
                />
                </Link>)
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