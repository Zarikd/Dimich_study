import React from 'react';
import { connect } from 'react-redux';

import { addPlayerActionCreator, updateCurrentICreator, updateNewNameTextCreator } from '../../../redux/Players-reducer';
// import StoreContext from '../../../redux/StoreContext';
import Team from './Team';



// const TeamContainer = (props) => {
//     debugger
//     let state = props.store.getState();

//     let addPlayer = (currentI) => {
//         props.store.dispatch(updateCurrentICreator(currentI));
//         props.store.dispatch(addPlayerActionCreator());
//     };

//     let onNameChange = (newName) => {
//         props.store.dispatch(updateNewNameTextCreator(newName));
//     };

//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addPlayer = (currentI) => {
//                     store.dispatch(updateCurrentICreator(currentI));
//                     store.dispatch(addPlayerActionCreator());
//                 };

//                 let onNameChange = (newName) => {
//                     store.dispatch(updateNewNameTextCreator(newName));
//                 };
//                 return (
//                     <Team addPlayer={addPlayer} updateNewNameText={onNameChange}
//                         players={state.players} newNameText={state.newNameText} />)
//             }
//             }
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        players: state.playersPage.players,
        newNameText: state.playersPage.newNameText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (currentI) => {
            dispatch(updateCurrentICreator(currentI));
            dispatch(addPlayerActionCreator());
        },
        updateNewNameText: (newName) => {
            dispatch(updateNewNameTextCreator(newName));
        },
    }
}

const TeamContainer = connect(mapStateToProps, mapDispatchToProps)(Team)

export default TeamContainer;