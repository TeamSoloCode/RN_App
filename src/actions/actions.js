import {
    LOGIN_WITH_FIREBASE,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_FACEBOOK
} from './actionsTypes'

/**
 * Login with firebase
 * @param {*} email 
 * @param {*} password 
 */
export const loginWithFirebase = (email, password) =>{
    const action = {
        type: LOGIN_WITH_FIREBASE,
        email: email,
        password: password
    };
    return action;
}

//login with facebook action
export const loginWithFacebook = (email, password) =>{
    const action = {
        type: LOGIN_WITH_FACEBOOK,
        email,
        password
    };
    return action;
}

//login with google action
export const loginWithGoogle = (email, password) =>{
    const action = {
        type: LOGIN_WITH_GOOGLE,
        email,
        password
    };
    return action;
}