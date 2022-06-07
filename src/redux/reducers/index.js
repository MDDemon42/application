import {combineReducers} from "redux";
import bookReducer from "./bookReducer";
import authorReducer from "./authorReducer";
import externalDataReducer from "./externalDataReducer";
import TDGClassesReducer from "./TDGClassesReducer";

export default combineReducers({
    bookReducer,
    authorReducer,
    externalDataReducer,
    TDGClassesReducer
});