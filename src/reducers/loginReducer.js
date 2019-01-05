import {
    LOGIN_WITH_FIREBASE,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_FACEBOOK,
    TYPING_EMAIL,
    TYPING_PASSWORD,
    LOGIN_WITH_FIREBASE_SUCCESSFUL,
    LOGIN_WITH_FIREBASE_FAILURE
} from '../actions/actionsTypes';

import User from '../models/User'

const userAccount = new User()

let initialState = {
    userAccount
}

//tạo reducer cho hành động đăng nhập
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_WITH_FIREBASE:
            state.userAccount.email = action.email
            state.userAccount.password = action.password
            break;
        case LOGIN_WITH_FIREBASE_SUCCESSFUL:
            state.userAccount.loggedBy = action.loggedBy
            state.userAccount.name = action.userName,
            state.userAccount.phone = action.userPhone,
            state.userAccount.photoUrl = action.userPhotoUrl
            break;
        case LOGIN_WITH_FIREBASE_FAILURE:
            state.userAccount.loggedBy = action.loggedBy
            
            break;
        case TYPING_EMAIL:
            state.userAccount.email = action.email
            break;
        case TYPING_PASSWORD:
            state.userAccount.password = action.password
            break;
    }
    return state
}


export default loginReducer;