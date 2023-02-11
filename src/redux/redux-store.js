import {combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./auth-reducer";
import playersReducer from './Players-reducer';
import profileReducer from "./Profile-reducer";
import usersReducer from "./Users-reducer";

let reducers = combineReducers({
   playersPage: playersReducer,
   usersPage: usersReducer,
   profilePage: profileReducer,
   auth: authReducer
}
);

let store = createStore(reducers);

window.store = store;

export default store;