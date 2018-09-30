import {
    LOGIN_WITH_FIREBASE,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_FACEBOOK
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
            state.userAccount.email = action.email;
            state.userAccount.password = action.password;
            alert(JSON.stringify(action))
            break;
    }
    return state;
}

function loginFirebase(email, password, firebase){
    try{
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
    catch(err){
        throw err;
    }
}

export default loginReducer;