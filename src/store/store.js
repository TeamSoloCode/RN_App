import { createStore } from 'redux'
//reducers
import rootReducer from '../reducers/rootReducer';

/**
 * Tạo store cho redux
 */
const store = createStore(rootReducer)

export default store