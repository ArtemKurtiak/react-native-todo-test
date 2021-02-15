import AllScreen from "./AllSсreen";
import React from 'react'
import {connect} from "react-redux";
import {addTask} from "../../Redux/tasks-reducer";

class AllScreenContainer extends React.Component {
    render() {
        return <AllScreen {...this.props}/>
    }
}

const MSTP = (state) => ({
    allTasks: state.tasksReducer.allTasks
})
const MDTP = (dispatch) => {
    return {
        addTask: (title) => {
            dispatch(addTask(title))
        }
    }
}

export default connect(MSTP, MDTP)(AllScreenContainer);

