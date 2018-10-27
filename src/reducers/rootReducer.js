import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import constrolReducer from './controlReducer';

export default combineReducers({
    login: loginReducer,
    register: registerReducer,
    control : constrolReducer
})