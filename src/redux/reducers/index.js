import {combineReducers} from "redux";
import bookReducer from "./bookReducer";
import authorReducer from "./authorReducer";
import externalDataReducer from "./externalDataReducer";

export default combineReducers({
    bookReducer,
    authorReducer,
    externalDataReducer
});