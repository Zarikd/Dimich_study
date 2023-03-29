import React from 'react';
import { Navigate, NavLink, } from 'react-router-dom';
import s from './Profile.module.css'
import userPhoto from '../../../assets/images/User.jpg'
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'post'} placeholder={props.newText}
                validate={[required, maxLength10]} />
            <div>
                <button>AddPost</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm)

let Profile = (props) => {

    const sendNewPost = (newPost) => {
        props.addNewPost(newPost.post)
    }

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <img src={!props.profile.photos.small ? userPhoto : props.profile.photos.small} alt="" />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <PostReduxForm onSubmit={sendNewPost} newText={props.newText} />
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
