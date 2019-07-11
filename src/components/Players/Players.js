import React from 'react';
import Player from './PlayerCard/PlayerCard';

const players = (props) => props.players.map((player, index) => {
    return <Player key={index} player={player}/>
})

export default players;