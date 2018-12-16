import {
    REQUEST_CHECK_IS_LEADER,
    CHECK_IS_LEADER_SUCCESSFUL,
    CHECK_IS_LEADER_FAILURE,
    EXCEPTION
} from './actionsTypes'

export const requestCheckIsLeader = (postBody) => {
    const action = {
        type: REQUEST_CHECK_IS_LEADER,
        body: postBody
    }
    return action
}

export const checkIsLeaderFailure = (result) => {
    const action = {
        type: CHECK_IS_LEADER_FAILURE,
        resultMessage: result.resultMessage,
        resultCode: result.resultCode 
    }
    return action
}

export const checkIsLeaderSuccessful = (result) => {
    const action = {
        type: CHECK_IS_LEADER_SUCCESSFUL,
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