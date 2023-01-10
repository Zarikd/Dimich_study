
const ADD_NAME = 'ADD-NAME';
const UPDATE_NEW_NAME_TEXT = 'UPDATE-NEW-NAME-TEXT';
const UPDATE_CURRENT_I = 'UPDATE_CURRENT_I';

let initialState = {
    players: [
        { id: 1, name: '' },
        { id: 2, name: '' },
        { id: 3, name: '' },
        { id: 4, name: '' },
        { id: 5, name: '' },
    ],
    newNameText: 'it-kamasutra',

    i: 0,
};

const playersReducer = (state = initialState, action) => {

    // let stateCopy = {
    //     ...state,
    //     players: [ ...state.players]
    // }

    switch (action.type) {
        case ADD_NAME: {
            // let newName = {
            //     id: state.i,
            //     name: state.newNameText,
            // };
            // this._state.players.push(newName);
            return {
                ...state,
                players: [...state.players],
                // name: {...state.players.name},
                name: state.players[state.i].name = state.newNameText,
                newNameText: '',
            }
            // let stateCopy = { ...state };
            // stateCopy.players = [...state.players];
            // stateCopy.players[stateCopy.i].name = stateCopy.newNameText;
            // stateCopy.i++;
            // stateCopy.newNameText = '';
            // return stateCopy
        }
        case UPDATE_NEW_NAME_TEXT: {
            // let stateCopy = { ...state };
            // stateCopy.newNameText = action.newNameText;
            // return stateCopy;
            return {
                ...state,
                newNameText: action.newNameText
            }
        }
        case UPDATE_CURRENT_I: {
            // let stateCopy = { ...state };
            // stateCopy.i = 0;
            // stateCopy.i = action.currentIText;
            // return stateCopy;
            return {
                ...state,
                i: action.currentIText,
            }
        }
        default: {
            return state;
        }
    }
};

export const addPlayerActionCreator = () => ({ type: ADD_NAME });

export const updateNewNameTextCreator = (newName) => ({
    type: UPDATE_NEW_NAME_TEXT,
    newNameText: newName,
});

export const updateCurrentICreator = (currentI) => ({
    type: UPDATE_CURRENT_I,
    currentIText: currentI,
});


export default playersReducer;