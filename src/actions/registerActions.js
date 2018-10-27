import {
    TYPING_USERNAME,
    TYPING_REGISTER_EMAIL,
    TYPING_REGISTER_PASSWORD,
    TYPING_REGISTER_CONFIRM_PASSWORD,
    BIRTHDAY_SELECTED,
    REGISTER_SUCCESSFUL,
    REGISTER_FAILURE,
    REGISTER_CANCELED,
    REGISTERING,
    REGISTER_WITH_FIREBASE
} from './actionsTypes'

/**
 * save email when typing email 
 * @param {*} email 
 */
export const typingRegisterEmail = (email) => {
    const action = {
        type: TYPING_REGISTER_EMAIL,
        email: email
    }
    return action
}
/**
 * save password when typing password
 * @param {*} password 
 */
export const typingRegisterPassword = (password) => {
    const action = {
        type: TYPING_REGISTER_PASSWORD,
        password: password
    }
    return action
}
/**
 * save confirmPassword when typing confirmPassword
 * @param {*} confirmPassword 
 */
export const typingRegisterComfirmPassword = (confirmPassword) => {
    const action = {
        type: TYPING_REGISTER_CONFIRM_PASSWORD,
        confirmPassword: confirmPassword
    }
    return action
}
/**
 * save username when typing username
 * @param {*} username 
 */
export const typingUsername = (username) => {
    const action = {
        type: TYPING_USERNAME,
        username: username
    }
    return action
}

/**
 * save birthday when typing birthday
 * @param {*} date 
 */
export const selectBirthday = (date) => {
    const action = {
        type: BIRTHDAY_SELECTED,
        date : date
    }
    return action
}

/**
 * 
 * @param {*} registerStatus 
 */
export const registerSucessful = (registerStatus) => {
    const action = {
        type: REGISTER_SUCCESSFUL,
        registerStatus: registerStatus
    }
    return action
}

/**
 * 
 * @param {*} registerStatus 
 */
export const registerFailure = (registerStatus) => {
    const action = {
        type: REGISTER_FAILURE,
        registerStatus: registerStatus
    }
    return action
}

/**
 * 
 * @param {*} registerStatus 
 */
export const registerCancel = (registerStatus) => {
    const action = {
        type: REGISTER_CANCELED,
        registerStatus: registerStatus
    }
    return action
}

/**
 * 
 * @param {*} registerStatus 
 */
export const registering = (registerStatus) => {
    const action = {
        type: REGISTERING,
        registerStatus: registerStatus
    }
    return action
}
export const registerWithFirebase = (email,username,password,confirmPassword,date) => {
    const action = {
        type: REGISTER_WITH_FIREBASE,
        email:email,
        username:username,
        password:password,
        confirmPassword:confirmPassword,
        date:date
    }
    return action
}