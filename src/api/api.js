import { 
    POST,
    GET,
    FETCH_ALL_TEAM_MEMBER
} from './URLs'

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

export const fetchAllTeamMember = async (body) => {
    try{
        const data = await commonCallApi(POST, FETCH_ALL_TEAM_MEMBER, body);
        return data
    }catch(e){
        console.log(e)
    }
}