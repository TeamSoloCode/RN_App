import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import teamReducer from './teamReducer'

export default combineReducers({
    login: loginReducer,
    register: registerReducer,
    team: teamReducer,
})