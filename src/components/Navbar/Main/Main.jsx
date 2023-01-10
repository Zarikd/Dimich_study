import s from './Main.module.css';
import { NavLink } from 'react-router-dom';


const Main = (props) => {
    return (
        <div className={s.Main}>
            The content of Main
            {props.Name}
        </div>
    )
};

export default Main;