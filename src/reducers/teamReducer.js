import {
    REQUEST_FETCH_ALL_TEAM_MEMBER,
    FETCH_ALL_TEAM_MEMBER_FAILURE,
    FETCH_ALL_TEAM_MENBER_SUCCESSFUL,
    REQUEST_CHECK_HAS_TEAM,
    CHECK_HAS_TEAM_FAILURE,
    CHECK_HAS_TEAM_SUCCESSFUL,
    REQUEST_CHECK_IS_LEADER,
    CHECK_IS_LEADER_SUCCESSFUL,
    CHECK_IS_LEADER_FAILURE,
    EXCEPTION
} from '../actions/actionsTypes'

import {
    HAS_NO_TEAM,
    ALREADY_HAS_TEAM,
    NOT_LEADER,
    IS_LEADER
} from '../resultCode'

let initialState = {
    userId:'hrqT3YVCUzbEXhoLISENmyzGRaF3',
    teamId: '-LJYoUQsU0ueE0tVUbZp',
    members: null,
    fetchingMembers: false,
    hasTeam: false,
    isLeader: false,
    leaderEmail : null
}

/**
 * Fetch all team member
 * @param {*} state 
 * @param {*} action 
 */
const teamReducer = (state = initialState, action) => {
        switch (action.type) {
            case REQUEST_FETCH_ALL_TEAM_MEMBER:
                console.log('fetching .......')
                state.fetchingMembers = true
                break;

            case FETCH_ALL_TEAM_MEMBER_FAILURE:
                state.fetchingMembers = false
                break;

            case FETCH_ALL_TEAM_MENBER_SUCCESSFUL:
                state.members = action.resultData
                state.fetchingMembers = false
                break;

            case REQUEST_CHECK_HAS_TEAM:
                console.log('checkingHasTeam .......')
                break;

            case CHECK_HAS_TEAM_FAILURE:
                console.log(action.exception)
                break;

            case CHECK_HAS_TEAM_SUCCESSFUL:
                switch (action.resultCode){
                    case HAS_NO_TEAM:
                        state.hasTeam = false
                        state.teamId = null
                        break;
                    case ALREADY_HAS_TEAM:
                        state.hasTeam = true
                        state.teamId = action.resultMessage
                        break;
                }
                break;

            case REQUEST_CHECK_IS_LEADER:
                console.log('checking is leader .......')
                break;

            case CHECK_HAS_TEAM_FAILURE:
                console.log(action.exception)
                break;

            case CHECK_HAS_TEAM_SUCCESSFUL:
                switch (action.resultCode){
                    case NOT_LEADER:
                        state.isLeader = false
                        //tra về email của leader
                        state.leaderEmail = action.resultMessage
                        break;
                    case IS_LEADER:
                        state.isLeader = true
                        //tra về email của leader
                        state.leaderEmail = action.resultMessage
                        break;
                }
                break;

            case EXCEPTION:
                console.log(action.exception)
                break;
        }
        return state
}

export default teamReducer;