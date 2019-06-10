import React from 'react';
import classes from './Player.module.css';
const player = (props) => {
    return (
        <div>
            <div className={classes.playerData}> 
            <img src={props.image}  alt={props.name}/>
            {props.name}</div>
        </div>
    );
}

export default player;