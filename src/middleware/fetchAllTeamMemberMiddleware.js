import {
    REQUEST_FETCH_ALL_TEAM_MEMBER,
} from '../actions/actionsTypes';

import { fetchAllTeamMember } from '../api/api'

import { put, takeLatest } from 'redux-saga/effects'

import {
    fetchAllTeamMemberFailure,
    fetchAllTeamMemberSuccessful,
    fetchingCaughtException
 } from '../actions/fetchAllTeamMemberActions'

function* fetchAllTeamMemberFromApi(action) {
    try {
        const result = yield fetchAllTeamMember(action.body)
        const response = yield result.json();

        response.resultCode == 1 ? yield put(fetchAllTeamMemberSuccessful(response)) 
                                 : yield put(fetchAllTeamMemberFailure(response))
    }
    catch(e){
        yield put(fetchingCaughtException(e.toString()))
    }
  }
  
export default function* watchFetchAllTeamMemberAsync() {
    yield takeLatest(REQUEST_FETCH_ALL_TEAM_MEMBER, fetchAllTeamMemberFromApi)
}