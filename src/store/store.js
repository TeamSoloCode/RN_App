import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

//reducers
import rootReducer from '../reducers/rootReducer';
//rootMiddleware
import rootMiddleware from '../middleware/rootMiddleware';


const sagaMiddleware = createSagaMiddleware()

export default store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootMiddleware)