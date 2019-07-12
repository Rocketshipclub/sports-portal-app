import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'
import classes from './PlayerPage.module.css';

class PlayerPage extends Component {
    state = {
        name: '',
        image: '',
        team: '',
        kills: 0,
        deaths: 0,
        assists: 0,
        bio: '',
        realName: '',
        nationality: '',
        age: 0,
        team: '',
        teamLogo: '',
        teamName: '',
        role: '',
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/players/' + this.props.match.params.id)
            .then(response => {
                console.log(response.data.team)
                this.setState({
                    name: response.data.name,
                    image: response.data.image,
                    team: response.data.team,
                    kills: response.data.stats.kills,
                    deaths: response.data.stats.deaths,
                    assists: response.data.stats.assists,
                    realName: response.data.realName,
                    nationality: response.data.nationality,
                    age: response.data.age,
                    role: response.data.role
                })
            })
    }
    
    render() {
        return (
            <Container>
                <div className={classes.title}>
                <h1>{this.state.name}</h1>
                <h4 className={classes.smallTitle}>{this.state.realName}</h4>
                </div>
                <h4>{this.state.teamName}</h4>
                <Row>
                    <Column s={8}>
                        <Image src={this.state.image} fluid/>
                    </Column>
                    <Column s={2}>
                        <b>{this.state.role}</b>
                        <p>Kills: {this.state.kills} / Deaths: {this.state.deaths} / Assists: {this.state.assists}</p>
                        <hr></hr>
                        <h3 style={{color:'#2B2D42'}}>Bio</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default PlayerPage;