import {combineReducers, legacy_createStore as createStore} from "redux";
import playersReducer from './Players-reducer';
import usersReducer from "./Users-reducer";

let reducers = combineReducers({
   playersPage: playersReducer,
   usersPage: usersReducer,
}
);


let store = createStore(reducers);

window.store = store;

export default store;