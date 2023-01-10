import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    // debugger

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://ruskino.ru/media/portret/009/sv3epEqsVGa6XN1cRjxoFlMFdWI.jpg',
                followed: false, FullName: 'Dima', status: true, location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 2, photoUrl: 'https://ruskino.ru/media/portret/009/sv3epEqsVGa6XN1cRjxoFlMFdWI.jpg',
                followed: true, FullName: 'Sanya', status: false, location: { city: 'Shelkago', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://ruskino.ru/media/portret/009/sv3epEqsVGa6XN1cRjxoFlMFdWI.jpg',
                followed: false, FullName: 'Atoxa', status: false, location: { city: 'Korolev', country: 'Russia' }
            },
            {
                id: 4, photoUrl: 'https://ruskino.ru/media/portret/009/sv3epEqsVGa6XN1cRjxoFlMFdWI.jpg',
                followed: true, FullName: 'Dan', status: true, location: { city: 'Mitishi', country: 'Russia' }
            },
            {
                id: 5, photoUrl: 'https://ruskino.ru/media/portret/009/sv3epEqsVGa6XN1cRjxoFlMFdWI.jpg',
                followed: false, FullName: 'Slam', status: true, location: { city: 'Himki', country: 'Russia' }
            }
        ]
        )
    }
    return (
        <div className={s.Users}>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.avatar} src={u.photoUrl} alt="" />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.FullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )

};

export default Users;
