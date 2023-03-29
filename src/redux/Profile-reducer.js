import { profileAPI } from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const ADD_NEW_POST = 'ADD_NEW_POST';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
    profile: null,
    posts: [],
    newText: 'Write here your message',
    isFetching: false,
    status: 'wite here yours status',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case ADD_NEW_POST: {
            // let newPost = state.newText
            return {
                ...state,
                posts: [...state.posts, action.newPost],
            }
        }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case SET_USER_STATUS:
            return { ...state, status: action.status }
        default: {
            return state;
        }
    }
};


export const addNewPost = (newPost) => ({ type: ADD_NEW_POST, newPost });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
    }
}


export default profileReducer;