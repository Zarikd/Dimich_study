import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'
import userPhoto from '../../../assets/images/User.jpg'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= 20; i++) {
        pages.push(i);
    }
    return (
        <div className={s.Users}>
            <div className={s.Navigation}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                }
                )
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/Profile/' + u.id}>
                                <img className={s.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;
