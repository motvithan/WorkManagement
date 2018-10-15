import * as types from './../constants/ActionTypes';
var initState = false;
var myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.UPDATE_WORK:
        console.log(action.task);
            return action.task;
        default: return state;
    }
}
export default myReducer;