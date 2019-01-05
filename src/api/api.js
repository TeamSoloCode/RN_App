import { 
    POST,
    GET,
    FETCH_ALL_TEAM_MEMBER_URL,
    HAS_TEAM_URL,
    IS_LEADER_URL
} from './URLs'
/**
 * Common call API
 * @param {*} method GET || POST
 * @param {*} url api url
 * @param {*} body 
 */
const commonCallApi = async (method, url, body) => {
    try{
        const respone = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return respone
        
    }catch(e){
        console.log(e)
    }
}

/**
 * Get all team member
 * @param {*} body  : userId, teamId
 */
export const fetchAllTeamMember = async (body) => {
    try{
        const respone = await commonCallApi(POST, FETCH_ALL_TEAM_MEMBER_URL, body);
        return respone
    }catch(e){
        console.log(e)
    }
}

/**
 * Check user already has team
 * @param {*} body : userId
 */
export const checkHasTeam = async (body) => {
    try{
        const respone = await commonCallApi(POST, HAS_TEAM_URL, body);
        return respone
    }catch(e){
        console.log(e)
    }
}

export const checkIsLeader = async (body) => {
    try{
        const respone = await commonCallApi(POST, IS_LEADER_URL, body);
        return respone
    }catch(e){
        console.log(e)
    }
}