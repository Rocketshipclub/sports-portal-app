import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'
class PlayerPage extends Component {
    state = {
        name: '',
        image: '',
        team: '',
        kills: 0,
        deaths: 0,
        assists: 0,
        bio: ''
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/players/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    image: response.data.image,
                    team: response.data.team,
                    kills: response.data.stats.kills,
                    deaths: response.data.stats.deaths,
                    assists: response.data.stats.assists
                });
            });
    }
    
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>{this.state.name}</h1>
                </Jumbotron>
                <Row>
                    <Column s={8}>
                        <Image src={this.state.image} fluid/>
                    </Column>
                    <Column s={2}>
                        <p>Kills: {this.state.kills}</p>
                        <p>Deaths: {this.state.deaths}</p>
                        <p>Assists: {this.state.assists}</p>
                    </Column>
                    <Column s={2}>
                        <p>Bio bio bio bio bio</p>
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default PlayerPage;