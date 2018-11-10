import {
    LOGIN_WITH_FIREBASE,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_FACEBOOK,
    TYPING_EMAIL,
    TYPING_PASSWORD
} from '../actions/actionsTypes';

import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

import { loginWithFirebaseSuccessful } from '../actions/loginAction'

function* incrementAsync() {
    yield delay(2000)
    yield put(loginWithFirebaseSuccessful())
}


export default function* watchIncrementAsync() {
    yield takeEvery(LOGIN_WITH_FIREBASE, incrementAsync)
}