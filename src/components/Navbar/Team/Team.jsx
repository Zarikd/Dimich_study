import React from 'react';

import Player from '../../Player';
import s from './Team.module.css';


const Team = (props) => {
    // debugger

    let onAddPlayer = (e) => {
        let currentI = e.currentTarget.id - 1;
        props.addPlayer(currentI);
        console.log(e.currentTarget.id)
        console.log(props.players)
    };

    let onNameChange = (e) => {
        let newName = e.target.value;
        props.updateNewNameText(newName);
    };

    return (
        <div className={s.Team}>
            <textarea onChange={onNameChange} 
            value={props.newNameText} />
            <div onClick={onAddPlayer} id={props.players[0].id} className="FwdLeft">
                <Player Name={props.players[0].name} id={props.players[0].id} />
            </div>
            <div onClick={onAddPlayer} id={props.players[1].id} className="FwdCenter">
                <Player Name={props.players[1].name} id={props.players[1].id} />
            </div>
            <div onClick={onAddPlayer} id={props.players[2].id} className="FwdRight">
                <Player Name={props.players[2].name} id={props.players[2].id} />
            </div>
            <div onClick={onAddPlayer} id={props.players[3].id} className="DefLeft">
                <Player Name={props.players[3].name} id={props.players[3].id} />
            </div>
            <div onClick={onAddPlayer} id={props.players[4].id} className="DefRight">
                <Player Name={props.players[4].name} id={props.players[4].id} />
            </div>
        </div>
    )
};

export default Team;