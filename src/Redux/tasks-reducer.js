import {ADD_TASK} from "./types";

let initialState = {
    allTasks: [],
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK: {
            return {
                ...state,
                allTasks: [
                    ...state.allTasks,
                    {
                        title: action.payload.title
                    }
                ]
            }
        }
        default:
            return state
    }
}

export const addTask = (title) => {
    return {
        type: ADD_TASK,
        payload: {
            title
        }
    }
}

export  default tasksReducer;