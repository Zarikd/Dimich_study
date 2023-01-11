import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC } from '../../../redux/Users-reducer';

import Users from './UsersC';




let mapStateToProps = (state) => {
    // debugger
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
       },
       setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber))
       },
       setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount))
       },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;