import {
    REQUEST_FETCH_ALL_TEAM_MEMBER,
    FETCH_ALL_TEAM_MEMBER_FAILURE,
    FETCH_ALL_TEAM_MENBER_SUCCESSFUL,
    EXCEPTION
} from './actionsTypes'

export const requestFetchAllTeamMember = (postBody) => {
    const action = {
        type: REQUEST_FETCH_ALL_TEAM_MEMBER,
        body: postBody
    }
    return action
}

export const fetchAllTeamMemberFailure = (result) => {
    const action = {
        type: FETCH_ALL_TEAM_MEMBER_FAILURE,
        resultMessage: result.resultMessage,
        resultCode: result.resultCode 
    }
    return action
}

export const fetchAllTeamMemberSuccessful = (result) => {
    const action = {
        type: FETCH_ALL_TEAM_MENBER_SUCCESSFUL,
        resultData: result.resultData,
        resultCode: result.resultCode 
    }
    return action
}

export const fetchingCaughtException = (exception) =>{
    const action = {
        type: EXCEPTION,
        exception: exception
    }
    return action
}