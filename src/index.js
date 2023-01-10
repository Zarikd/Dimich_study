import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, NavLink, } from 'react-router-dom';

import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let rerenderEntireTree = (state) => {
//   // debugger;
  root.render(
    <Router>
      <Provider store={store}>
        {/* <React.StrictMode > */}
          <App
          // store={store} 
          // dispatch={store.dispatch.bind(store)} 
          />
        {/* </React.StrictMode> */}
        </Provider>
    </Router>
  );
// }

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
