import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

import Player from '../../Player';
import s from './Team.module.css';


const TeamForm = (props) => {
    return (
        <form action="" onBlur={props.onBlur}>
            <Field component={Textarea} name={'playerName'}
                placeholder={props.newNameText} validate={[required]} />
        </form>
    )
}

const TeamReduxForm = reduxForm({ form: 'playerName' })(TeamForm)

const Team = (props) => {

    let onAddPlayer = (e) => {
        let currentI = e.currentTarget.id - 1;
        props.addPlayer(currentI);
    };

    const setName = (newName) => {
        props.updateNewNameText(newName.target.value)
    }

    return (
        <div className={s.Team}>
            <div className={s.textarea}>
                <TeamReduxForm  newNameText={props.newNameText} onBlur={setName} />
            </div>
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
}


// const Team = (props) => {

//     let onAddPlayer = (e) => {
//         let currentI = e.currentTarget.id - 1;
//         props.addPlayer(currentI);
//     };

//     let onNameChange = (e) => {
//         let newName = e.target.value;
//         props.updateNewNameText(newName);
//     };

//     return (
//         <div className={s.Team}>
//             <textarea onChange={onNameChange} 
//             value={props.newNameText} />
//             <div onClick={onAddPlayer} id={props.players[0].id} className="FwdLeft">
//                 <Player Name={props.players[0].name} id={props.players[0].id} />
//             </div>
//             <div onClick={onAddPlayer} id={props.players[1].id} className="FwdCenter">
//                 <Player Name={props.players[1].name} id={props.players[1].id} />
//             </div>
//             <div onClick={onAddPlayer} id={props.players[2].id} className="FwdRight">
//                 <Player Name={props.players[2].name} id={props.players[2].id} />
//             </div>
//             <div onClick={onAddPlayer} id={props.players[3].id} className="DefLeft">
//                 <Player Name={props.players[3].name} id={props.players[3].id} />
//             </div>
//             <div onClick={onAddPlayer} id={props.players[4].id} className="DefRight">
//                 <Player Name={props.players[4].name} id={props.players[4].id} />
//             </div>
//         </div>
//     )
// };

export default Team;