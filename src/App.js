import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Contacts from './components/Navbar/Contacts/Contacts';
import Main from './components/Navbar/Main/Main';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Navbar/Profile/ProfileContainer';
import TeamContainer from './components/Navbar/Team/TeamContainer';
import UsersContainer from './components/Navbar/Users/UsersContainer';

function App(props) {
  // debugger;

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/'
            element={<Main Name='GaGa' />} />
          <Route path='/Contacts'
            element={<Contacts />} />
          <Route path='/Team'
            element={<TeamContainer
            // store={props.store} 
            />} />
          <Route path='/Users'
            element={<UsersContainer />} />
          <Route path='/Profile/*'
            element={<ProfileContainer />} />
        </Routes>
      </div>
    </div >
  );
};

export default App;
