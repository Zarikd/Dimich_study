import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <div className={s.Header}>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login 
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
};

export default Header;