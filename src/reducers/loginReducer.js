import {
    LOGIN_WITH_FIREBASE,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_FACEBOOK,
    TYPING_EMAIL,
    TYPING_PASSWORD,
    LOGIN_WITH_FIREBASE_SUCCESSFUL,
    LOGIN_WITH_FIREBASE_FAILURE
} from '../actions/actionsTypes';

let initialState = {
    userAccount: {
        email: "",
        password: "",
        loggedBy: null,
        userInfo: null
    }
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
            state.userAccount.userInfo = {}
            state.userAccount.userInfo.userName = action.userName,
            state.userAccount.userInfo.userPhone = action.userPhone,
            state.userAccount.userInfo.userPhotoUrl = action.userPhotoUrl
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