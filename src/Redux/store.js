import {combineReducers, createStore} from "redux";
import tasksReducer from "./tasks-reducer";



let rootReducer = combineReducers({
    tasksReducer: tasksReducer
})

export default rootReducer;
