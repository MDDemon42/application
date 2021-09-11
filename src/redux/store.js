import {createStore,applyMiddleware} from 'redux'
import rootReducer from "./reducer";
import {logger,saver} from './middleware'

const store = createStore(rootReducer,applyMiddleware(logger,saver))

export default store