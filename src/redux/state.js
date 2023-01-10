import playersReducer from "./Players-reducer";

// const ADD_NAME = 'ADD-NAME';
// const UPDATE_NEW_NAME_TEXT = 'UPDATE-NEW-NAME-TEXT';
// const UPDATE_CURRENT_I = 'UPDATE_CURRENT_I';

let store = {
    _state: {
        players: [
            { id: 1, name: '' },
            { id: 2, name: '' },
            { id: 3, name: '' },
            { id: 4, name: '' },
            { id: 5, name: '' },
        ],
        newNameText: 'it-kamasutra',
    },

    i: 0,

    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state = playersReducer (this._state, action);
        this._callSubscriber(this._state);

        // if (action.type === ADD_NAME) {
        //     let newName = {
        //         id: this.i,
        //         name: this._state.newNameText,
        //     };
        //     // this._state.players.push(newName);
        //     this._state.players[this.i].name = this._state.newNameText;
        //     this.i++;
        //     this._state.newNameText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_NAME_TEXT) {
        //     this._state.newNameText = action.newNameText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_CURRENT_I) {
        //     this.i = 0;
        //     this.i = action.currentIText;
        //     this._callSubscriber(this._state);
        // } 
    },
}


export default store;