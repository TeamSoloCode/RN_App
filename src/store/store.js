import { createStore, applyMiddleware } from 'redux'
//reducers
import rootReducer from '../reducers/rootReducer';
// redux obvasercle
import { createEpicMiddleware } from 'redux-observable';
const epicMiddleware = createEpicMiddleware(rootEpic);

/**
 * Tạo store cho redux
 */
const store = createStore(rootReducer, {}, applyMiddleware())

export default store