import {
    REQUEST_FETCH_ALL_TEAM_MEMBER,
    FETCH_ALL_TEAM_MEMBER_FAILURE,
    FETCH_ALL_TEAM_MENBER_SUCCESSFUL,
    EXCEPTION
} from '../actions/actionsTypes'

let initialState = {
    userId:'hrqT3YVCUzbEXhoLISENmyzGRaF3',
    teamId: '-LJYoUQsU0ueE0tVUbZp',
    members: null
}

/**
 * Fetch all team member
 * @param {*} state 
 * @param {*} action 
 */
const fetchAllTeamMemberReducer = (state = initialState, action) => {
        switch (action.type) {
            case REQUEST_FETCH_ALL_TEAM_MEMBER:
                console.log('fetching .......')
                break;
            case FETCH_ALL_TEAM_MEMBER_FAILURE:
                break;
            case FETCH_ALL_TEAM_MENBER_SUCCESSFUL:
                state.members = action.resultData
                break;
            case EXCEPTION:
                console.log(action.exception)
                break;
        }
        return state
}

export default fetchAllTeamMemberReducer;