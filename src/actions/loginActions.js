import {
    LOGIN_WITH_FIREBASE,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_FACEBOOK,
    TYPING_EMAIL,
    TYPING_PASSWORD
} from './actionsTypes'


/**
 * Lưu email khi đang nhập vào state
 * @param {*} email 
 */
export const typingEmail = (email) =>{
    const action = {
        type: TYPING_EMAIL,
        email: email
    }
    return action
}

/**
 * Lưu passwork khi đang nhập vào state
 * @param {*} password 
 */
export const typingPassword = (password) =>{
    const action = {
        type: TYPING_PASSWORD,
        password: password
    }
    return action
}
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

/**
 * 
 * @param {*} email 
 * @param {*} password 
 */
export const loginWithFacebook = (email, password) =>{
    const action = {
        type: LOGIN_WITH_FACEBOOK,
        email,
        password
    };
    return action;
}

/**
 * 
 * @param {*} email 
 * @param {*} password 
 */
export const loginWithGoogle = (email, password) =>{
    const action = {
        type: LOGIN_WITH_GOOGLE,
        email,
        password
    };
    return action;
}