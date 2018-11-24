import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import fetchAllTeamMember from './fetchAllTeamMemberReducer'

export default combineReducers({
    login: loginReducer,
    register: registerReducer,
    myMember: fetchAllTeamMember
})