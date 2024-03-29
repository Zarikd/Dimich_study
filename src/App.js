import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Routes } from 'react-router-dom';

import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';
import Contacts from './components/Navbar/Contacts/Contacts';
import Main from './components/Navbar/Main/Main';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Navbar/Profile/ProfileContainer';
import TeamContainer from './components/Navbar/Team/TeamContainer';
import UsersContainer from './components/Navbar/Users/UsersContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';

class App extends React.Component {
  // debugger;

  componentDidMount () {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="App">
        <HeaderContainer />
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
            <Route path='/Profile/:userId?'
              element={<ProfileContainer />} />
            <Route path='/Login'
              element={<Login />} />
          </Routes>
        </div>
      </div >
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializeApp})(App);

