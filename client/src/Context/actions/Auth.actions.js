import jwt_decode from 'jwt-decode';
import { removeTokenCookie, showToast } from '../../utils/tools';




export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user, dispatch) => {
    fetch(`/api/v1/users/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then((res) => res.json())
    .then((data) => {
        if (data) {
            const token = data.token;
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded, user)) 
        } else {
            logoutUser(dispatch)
        }
    })
    .catch((err) => {
        const msg = "Something Wrong!"
        showToast('ERROR', msg)
        logoutUser(dispatch)
    });
    
};

export const getUserProfile = (id) => {
    fetch(`/api/v1/users/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const logoutUser = (dispatch) => {
    removeTokenCookie();
    dispatch(setCurrentUser({}))
}

export const setCurrentUser = (decoded, user) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
        userProfile: user
    }
}