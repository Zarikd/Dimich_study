import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={s.Navbar}>
            <div>
                <NavLink to='/'>Main</NavLink>
            </div>
            <div>
                <NavLink to='/Team'>Team</NavLink>
            </div>
            <div>
                <NavLink to='/Contacts'>Contacts</NavLink>
            </div>
            <div>
                <NavLink to='/Users'>Users</NavLink>
            </div>
        </div>
    )
};

export default Navbar;