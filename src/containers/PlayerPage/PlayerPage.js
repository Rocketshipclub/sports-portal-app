import React, { Component } from 'react';
import axios from 'axios';
import Player from '../../components/Players/Player/Player';

class PlayerPage extends Component{
    state = {
        players: [],
      }
    
    componentDidMount() {
        axios.get('http://localhost:3001/api/players')
            .then(response => {
                this.setState({players: response.data});
            });
    }

    render(){
        
        const players = this.state.players.map(player => {
            return <Player key={player.playerId} image={player.image} name={player.name}/>
        });
        return <div>{players}</div>
    };
}

export default PlayerPage;