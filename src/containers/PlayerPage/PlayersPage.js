import React, { Component } from 'react';
import axios from 'axios';
import PlayerCard from '../../components/Cards/PlayerCard/PlayerCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Column from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class PlayersPage extends Component{
    state = {
        players: [],
        filteredPlayers: [],
        sortBy: 'kills',
        ascending: false,
        roles: {
            Top: true,
            Jungle: true,
            Mid: true,
            ADC: true,
            Support: true
        }
      }
    
    componentDidMount() {
        axios.get('http://localhost:3001/api/players')
            .then(response => {
                this.setState({players: response.data});
                this.filterRoles();
        });
    }

    handleSorting = (param) => {
        this.setState({sortBy:param})
    }

    handleChange = () => {
        this.setState({ascending: !this.state.ascending});
    }

    handleFilteringRole = (role) => {
        const changedRoles = this.state.roles;
        changedRoles[role] = !changedRoles[role];
        this.setState({roles: changedRoles});
        this.state.filteredPlayers = this.filterRoles();
    }

    // TODO move sorting to external utils class
    sortByKills = () => {
        this.state.ascending ? 
            this.state.filteredPlayers.sort((playerA, playerB) => (playerA.stats.kills > playerB.stats.kills) ? 1 : -1) :
            this.state.filteredPlayers.sort((playerA, playerB) => (playerA.stats.kills < playerB.stats.kills) ? 1 : -1)
    }

    sortByAssists = () => {
        this.state.ascending ? 
            this.state.filteredPlayers.sort((playerA, playerB) => (playerA.stats.assists > playerB.stats.assists) ? 1 : -1) :
            this.state.filteredPlayers.sort((playerA, playerB) => (playerA.stats.assists < playerB.stats.assists) ? 1 : -1)
    }

    sortByDeaths = () => {
        this.state.ascending ? 
            this.state.filteredPlayers.sort((playerA, playerB) => (playerA.stats.deaths > playerB.stats.deaths) ? 1 : -1) :
            this.state.filteredPlayers.sort((playerA, playerB) => (playerA.stats.deaths < playerB.stats.deaths) ? 1 : -1) 
    }

    sortByTeam = () => {
        this.state.ascending ?
            this.state.filteredPlayers.sort((playerA, playerB) => (playerA.team > playerB.team) ? 1 : -1) :
            this.state.filteredPlayers.sort((playerA, playerB) => (playerA.team < playerB.team) ? 1 : -1)
    }

    sortByKDA = () => {
        this.state.ascending ?
            this.state.filteredPlayers.sort((playerA, playerB) => (playerA.kda > playerB.kda) ? 1 : -1) :
            this.state.filteredPlayers.sort((playerA, playerB) => (playerA.kda < playerB.kda) ? 1 : -1)
    }

    filterRoles = () => {
        let players = [...this.state.players];
        const selectedRoles = Object.keys(this.state.roles).filter((key) => {
            return this.state.roles[key];
        });
        console.log(selectedRoles);
        players = players.filter(player => selectedRoles.includes(player.role));
        this.setState({filteredPlayers: players})
    }

        
    render(){
        switch(this.state.sortBy){
            case 'kills':
                this.sortByKills();
                break;
            case 'deaths':
                this.sortByDeaths();
                break;
            case 'assists':
                this.sortByAssists();
                break;
            case 'team':
                this.sortByTeam();
                break;
            case 'kda':
                this.sortByKDA();
                break;
        }
        let players = this.state.filteredPlayers.map(player => {
            return (
            <Column md={3}>
                <PlayerCard
                image={player.image} 
                name={player.name} 
                stats={player.stats}
                playerId={player.playerId}
                kda={player.kda}
                click={() => this.playerSelectedHandler}/></Column>
        )});
        
        return (
        <Container>
            Sort by <Button onClick={() => this.handleSorting('kills')}>Kills</Button> 
            <Button onClick={() => this.handleSorting('deaths')}>Deaths</Button> 
            <Button onClick={() => this.handleSorting('assists')}>Assists</Button>
            <Button onClick={() => this.handleSorting('kda')}>KDA</Button>
            <Button onClick={() => this.handleSorting('team')}>Team</Button>
            <Form>
                <Form.Check type="checkbox" label="Ascending" onChange={() => this.handleChange()}/> 
            </Form>
            <Form>
                <Form.Check inline type="checkbox" defaultChecked label="Top" onChange={() => this.handleFilteringRole('Top')}/> 
                <Form.Check inline type="checkbox" defaultChecked label="Jungle" onChange={() => this.handleFilteringRole('Jungle')}/>
                <Form.Check inline type="checkbox" defaultChecked label="Mid" onChange={() => this.handleFilteringRole('Mid')}/>
                <Form.Check inline type="checkbox" defaultChecked label="ADC" onChange={() => this.handleFilteringRole('ADC')}/>
                <Form.Check inline type="checkbox" defaultChecked label="Support" onChange={() => this.handleFilteringRole('Support')}/>
            </Form>

            <Row style={{paddingTop:'16px'}}>
                <CardGroup>
                {players}
                </CardGroup>
            </Row>
        </Container>);
    };
}

export default PlayersPage;