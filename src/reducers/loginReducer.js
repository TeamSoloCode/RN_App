import {
    LOGIN_WITH_FIREBASE,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_FACEBOOK,
    TYPING_EMAIL,
    TYPING_PASSWORD,
    LOGIN_WITH_FIREBASE_SUCCESSFUL
} from '../actions/actionsTypes';

let initialState = {
    userAccount:{
        email: "",
        password:"",
        loggedBy: -1
    }
}

//tạo reducer cho hành động đăng nhập
const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_WITH_FIREBASE:
            state.userAccount.email = action.email
            state.userAccount.password = action.password
            break;
        case LOGIN_WITH_FIREBASE_SUCCESSFUL:
            state.userAccount.loggedBy = action.loggedBy
            alert(JSON.stringify(state.userAccount))
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