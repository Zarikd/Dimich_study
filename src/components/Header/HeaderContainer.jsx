import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, 
        // {withCredentials: true})
        // usersAPI.setAuthMe()
        // .then(data => {
        //     if (data.resultCode === 0) {
        //         let {id, login, email} = data.data;
        //         this.props.setAuthUserData(id, email, login);
                
        //     }
        // }) thunk and API replace all this code
    

    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logout})(HeaderContainer);
