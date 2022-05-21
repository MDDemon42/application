import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from "./reducers/index"
import thunk from 'redux-thunk'
import {logger, saver} from './middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk, logger, saver))
);

export default store;