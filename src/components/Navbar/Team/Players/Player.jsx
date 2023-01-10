import s from './Player.module.css'

const Player = (props) => {
    return (
        <div className={s.Player}>
            <p>{props.Name}</p>
            <p>{props.id}</p>
        </div>
    )
};

export default Player;