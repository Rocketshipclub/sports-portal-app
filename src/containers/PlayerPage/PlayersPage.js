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
        selectedPlayer: '',
        sortBy: 'kills',
        ascending: false
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

    sortingHandler = (param) => {
        this.setState({sortBy:param})
    }

    handleChange = () => {
        this.setState({ascending: !this.state.ascending});
    }

    // TODO move sorting to external utils class
    sortByKills = () => {
        this.state.ascending ? 
            this.state.players.sort((playerA, playerB) => (playerA.stats.kills > playerB.stats.kills) ? 1 : -1) :
            this.state.players.sort((playerA, playerB) => (playerA.stats.kills < playerB.stats.kills) ? 1 : -1)
    }

    sortByAssists = () => {
        this.state.ascending ? 
            this.state.players.sort((playerA, playerB) => (playerA.stats.assists > playerB.stats.assists) ? 1 : -1) :
            this.state.players.sort((playerA, playerB) => (playerA.stats.assists < playerB.stats.assists) ? 1 : -1)
    }

    sortByDeaths = () => {
        this.state.ascending ? 
            this.state.players.sort((playerA, playerB) => (playerA.stats.deaths > playerB.stats.deaths) ? 1 : -1) :
            this.state.players.sort((playerA, playerB) => (playerA.stats.deaths < playerB.stats.deaths) ? 1 : -1) 
    }

    sortByTeam = () => {
        this.state.ascending ?
            this.state.players.sort((playerA, playerB) => (playerA.team > playerB.team) ? 1 : -1) :
            this.state.players.sort((playerA, playerB) => (playerA.team < playerB.team) ? 1 : -1)
    }

    sortByKDA = () => {
        this.state.ascending ?
            this.state.players.sort((playerA, playerB) => (playerA.kda > playerB.kda) ? 1 : -1) :
            this.state.players.sort((playerA, playerB) => (playerA.kda < playerB.kda) ? 1 : -1)
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

        const players = this.state.players.map(player => {
            return (
            <Column md={3}>
                <PlayerCard
                image={player.image} 
                name={player.name} 
                stats={player.stats}
                playerId={player.playerId}
                kda={player.kda}
                click={() => this.playerSelectedHandler}/></Column>
        )}); // reverse the final array because firebase returns players in ascending order
        
        return (
        <Container>
            Sort by <Button onClick={() => this.sortingHandler('kills')}>Kills</Button> 
            <Button onClick={() => this.sortingHandler('deaths')}>Deaths</Button> 
            <Button onClick={() => this.sortingHandler('assists')}>Assists</Button>
            <Button onClick={() => this.sortingHandler('kda')}>KDA</Button>
            <Button onClick={() => this.sortingHandler('team')}>Team</Button>
            <Form>
                <Form.Check type="checkbox" label="Ascending" onChange={() => this.handleChange()}/> 
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