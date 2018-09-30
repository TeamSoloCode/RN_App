import {
    LOGIN_WITH_FIREBASE,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_FACEBOOK,
    TYPING_EMAIL,
    TYPING_PASSWORD
} from '../actions/actionsTypes';

import * as firebase from 'firebase';

let initialState = {
    userAccount:{
        email: '',
        password:''
    }
}

//tạo reducer cho hành động đăng nhập
const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_WITH_FIREBASE:
            state.userAccount.email = ""
            state.userAccount.password = ""
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