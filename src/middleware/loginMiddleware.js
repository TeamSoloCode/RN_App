import { put, takeLatest } from 'redux-saga/effects'
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
 } from '../actions/loginActions'

const loginFirebase = async (email, password) => {
    return await firebase.auth().signInWithEmailAndPassword(email, password)
}

function* loginFirebaseMiddleware(action) {
    try{
        let loginsStatus = false
        let userAccount = {}
        yield loginFirebase(action.email, action.password)
        .then((userInfo)=>{
            loginsStatus = true
            userAccount.displayName = userInfo.user.displayName
            userAccount.phoneNumber = userInfo.user.phoneNumber
            userAccount.photoURL = userInfo.user.photoURL
            console.log(userAccount)
        })
        .catch((reason)=>{
            console.log(reason)
        })

        loginsStatus ? yield put(loginWithFirebaseSuccessful(userAccount))
                     : yield put(loginWithFirebaseFailure())
    }
    catch(e){
        console.log(e.toString())
    }
}

export default function* watchLoginWithFirebaseAsync() {
    yield takeLatest(LOGIN_WITH_FIREBASE, loginFirebaseMiddleware)
}