import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./auth-reducer";
import playersReducer from './Players-reducer';
import profileReducer from "./Profile-reducer";
import usersReducer from "./Users-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
   playersPage: playersReducer,
   usersPage: usersReducer,
   profilePage: profileReducer,
   auth: authReducer,
   form: formReducer
}
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;