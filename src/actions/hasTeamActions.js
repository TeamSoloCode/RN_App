import {
    REQUEST_CHECK_HAS_TEAM,
    CHECK_HAS_TEAM_SUCCESSFUL,
    CHECK_HAS_TEAM_FAILURE,
    EXCEPTION
} from './actionsTypes'

export const requestCheckHasTeam = (postBody) => {
    const action = {
        type: REQUEST_CHECK_HAS_TEAM,
        body: postBody
    }
    return action
}

export const checkHasTeamFailure = (result) => {
    const action = {
        type: CHECK_HAS_TEAM_FAILURE,
        resultMessage: result.resultMessage,
        resultCode: result.resultCode 
    }
    return action
}

export const checkHasTeamSuccessful = (result) => {
    const action = {
        type: CHECK_HAS_TEAM_SUCCESSFUL,
        resultMessage: result.resultMessage,
        resultCode: result.resultCode
    }
    return action
}

export const caughtException = (exception) =>{
    const action = {
        type: EXCEPTION,
        exception: exception
    }
    return action
}