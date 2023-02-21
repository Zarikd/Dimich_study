import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withAuthNavigate = (Component) => {
    let AuthNavigate = (props) => {
        if (!props.isAuth) {
            return <Navigate to='/Login' />
        }

        return <Component {...props} />
    }

    let ConnectedWithAuthNavigate = connect(mapStateToProps)(AuthNavigate)
    
    return ConnectedWithAuthNavigate
}

