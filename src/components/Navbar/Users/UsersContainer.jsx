import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../../redux/Users-reducer';

import Users from './UsersC';




let mapStateToProps = (state) => {
    // debugger
    return {
        users: state.usersPage.users,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
       follow: (userId) => {
        dispatch(followAC(userId))
       },
       unfollow: (userId) => {
        dispatch(unfollowAC(userId))
       },
       setUsers: (users) => {
        dispatch(setUsersAC(users))
       }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;