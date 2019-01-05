import {
    REQUEST_CHECK_HAS_TEAM,
} from '../actions/actionsTypes';

import { checkHasTeam } from '../api/api'

import { put, takeLatest } from 'redux-saga/effects'

import {
    checkHasTeamSuccessful,
    checkHasTeamFailure,
    caughtException
 } from '../actions/hasTeamActions'

function* checkHasTeamFromApi(action) {
    try {
        const result = yield checkHasTeam(action.body)
        const response = yield result.json();
        console.log(response)
        
        response !== {}
           ? yield put(checkHasTeamSuccessful(response))
           : yield put(checkHasTeamFailure(response))
        
    }
    catch(e){
        yield put(caughtException(e.toString()))
    }
  }
  
export default function* watchCheckHasTeamFromApiAsync() {
    yield takeLatest(REQUEST_CHECK_HAS_TEAM, checkHasTeamFromApi)
}