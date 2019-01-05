import {
    REQUEST_CHECK_IS_LEADER
} from '../actions/actionsTypes';

import { checkIsLeader } from '../api/api'

import { put, takeLatest } from 'redux-saga/effects'

import {
    checkIsLeaderSuccessful,
    checkIsLeaderFailure,
    caughtException
 } from '../actions/isLeaderActions'

function* checkIsLeaderFromApi(action) {
    try {
        const result = yield checkIsLeader(action.body)
        const response = yield result.json();
        console.log(response)
        
        response !== {}
           ? yield put(checkIsLeaderSuccessful(response))
           : yield put(checkIsLeaderFailure(response))
        
    }
    catch(e){
        yield put(caughtException(e.toString()))
    }
  }
  
export default function* watchCheckIsLeaderFromApiAsync() {
    yield takeLatest(REQUEST_CHECK_IS_LEADER, checkIsLeaderFromApi)
}