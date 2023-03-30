import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <div className={s.Header}>
            <div className={s.loginBlock}>
                {props.isAuth ? 
                <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>
                : <NavLink to={'/Login'}>Login</NavLink>}
            </div>
        </div>
    )
};

export default Header;