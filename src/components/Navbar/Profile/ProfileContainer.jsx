import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile, toggleIsFetching, updateNewText, addNewPost } from '../../../redux/Profile-reducer';

import Preloader from '../../common/preloader/Preloader';
import Profile from './Profile';


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUserProfile(response.data);
        });
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Profile {...this.props}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        isFetching: state.profilePage.isFetching,
        newText: state.profilePage.newText,
    }
};


export default connect(mapStateToProps, {
    setUserProfile,
    toggleIsFetching,
    updateNewText,
    addNewPost,
})(ProfileContainer);

 