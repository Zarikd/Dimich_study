import React from 'react';
import { Navigate, NavLink, } from 'react-router-dom';
import s from './Profile.module.css'
import userPhoto from '../../../assets/images/User.jpg'
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';

let Profile = (props) => {
    // debugger
    let onTextChange = (e) => {
        let newText = e.target.value;
        props.updateNewText(newText);
    };

   

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <img src={!props.profile.photos.small ? userPhoto : props.profile.photos.small } alt="" />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <textarea onChange={onTextChange} value={props.newText} />
            <div>
                <button onClick={() => props.addNewPost()}>AddPost</button>
            </div>
            <div>
                {
                    props.posts.map(p => <div key={p.id}>
                        {p}
                    </div>)
                }
            </div>
        </div>
    )

}

export default Profile;
