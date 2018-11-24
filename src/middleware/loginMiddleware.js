import { takeEvery } from 'redux-saga/effects'
import * as firebase from 'firebase' 

import {
    LOGIN_WITH_FIREBASE,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_FACEBOOK,
    TYPING_EMAIL,
    TYPING_PASSWORD
} from '../actions/actionsTypes';

import { 
    loginWithFirebaseSuccessful,
    loginWithFirebaseFailure,
    loginWithFirebase
 } from '../actions/loginActions'

function loginFirebase(email, password){
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userInfomation)=> {
        console.log(userInfomation.user.displayName)
        return 1
    })
    .catch((error) => {
        console.log(error.message)
        return -1
    });
}

function* loginFirebaseMiddleware() {
    const result = loginFirebase()
    if(result == 1){
        yield put(loginWithFirebaseSuccessful())
    }
    else{
        yield put(loginWithFirebaseFailure())
    }
}


export default function* watchIncrementAsync() {
    yield takeEvery(LOGIN_WITH_FIREBASE, loginFirebaseMiddleware)
}