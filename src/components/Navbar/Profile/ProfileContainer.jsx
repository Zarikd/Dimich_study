import React from 'react';
import { Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserProfile, toggleIsFetching, addNewPost, 
    getUserProfile, getUserStatus, updateStatus } from '../../../redux/Profile-reducer';

import Profile from './Profile';
import { withAuthNavigate } from '../../../hoc/AuthNavigate';
import { compose } from 'redux';


const ProfileContainer = (props) => {
    // debugger
    const params = useParams();
    if (!params.userId) {
        // params.userId = 2
        params.userId = 27418
    }
    // debugger

    // useEffect(() => {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`).then(response => {
    //         props.setUserProfile(response.data);
    //     })
    // }, [params.userId]) both correct but this propmise which is not really good
    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
    //         props.setUserProfile(response.data);
    //     })()
    // }, [params.userId]) I don't know how create thunk and API with function async, need search information

    useEffect(() => {
        props.getUserProfile(params.userId)
        props.getUserStatus(params.userId)
    }, [params.userId])


    return <Profile  {...props} />
}



// class ProfileContainer extends React.Component {

//     componentDidMount() {
//         debugger
//         this.props.toggleIsFetching(true);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
//             this.props.toggleIsFetching(false);
//             this.props.setUserProfile(response.data);
//         });
//     }


//     render() {
//         return <>
//             {this.props.isFetching ? <Preloader /> : null}
//             <Profile {...this.props}/>
//         </>
//     }
// }

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        isFetching: state.profilePage.isFetching,
        newText: state.profilePage.newText,
        status: state.profilePage.status
        // isAuth: state.auth.isAuth,
    }
};

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        toggleIsFetching,
        addNewPost,
        getUserProfile,
        getUserStatus,
        updateStatus,
    }),
    withAuthNavigate
)(ProfileContainer)

// let AuthNavigateComponent = withAuthNavigate(ProfileContainer)

// (props) => {

//     if (!props.isAuth) {
//         return <Navigate to='/Login' /> 
//      }
 
//     return <ProfileContainer {...props} />
// }


// export default connect(mapStateToProps, {
//     setUserProfile,
//     toggleIsFetching,
//     updateNewText,
//     addNewPost,
//     getUserProfile
// })(AuthNavigateComponent);

