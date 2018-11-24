import {
    REQUEST_FETCH_ALL_TEAM_MEMBER,
    FETCH_ALL_TEAM_MEMBER_FAILURE,
    FETCH_ALL_TEAM_MENBER_SUCCESSFUL
} from '../actions/actionsTypes';

import { fetchAllTeamMember } from '../api/api'

import { put, call, takeLatest } from 'redux-saga/effects'

import {
    requestFetchAllTeamMember,
    fetchAllTeamMemberFailure,
    fetchAllTeamMemberSuccessful,
    fetchingCaughtException
 } from '../actions/fetchAllTeamMemberActions'

function* fetchAllTeamMemberFromApi(action) {
    try {
        const result = yield fetchAllTeamMember(action.body)
        const response = yield result.json();
        if(response.resultCode == 1){
            yield put(fetchAllTeamMemberSuccessful(response))
        } 
        else{
            yield put(fetchAllTeamMemberFailure(response))
        }
    }
    catch(e){
        yield put(fetchingCaughtException(e.toString()))
    }
  }
  
export default function* watchFetchAllTeamMemberAsync() {
    yield takeLatest(REQUEST_FETCH_ALL_TEAM_MEMBER, fetchAllTeamMemberFromApi)
}