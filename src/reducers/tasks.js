import * as types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];
var randomString = () => {
    var randomstring = require("randomstring");
    return randomstring.generate();
}
var myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_WORK:
            var newWork = {
                id: randomString(),
                name: action.task.name,
                status: action.task.status === true ? true : false
            }
            state.push(newWork);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.DEL_WORK:
            var index = findIndex(action.id, state);
            state.splice(index, 1);
            saveLocalStorage(state);
            return [...state];
        case types.UPDATE_STATUS:
            var index = findIndex(action.id, state);
            if (index !== -1) {
                state[index].status = !state[index].status;
            }
            saveLocalStorage(state);
            return [...state];
        default: return state;
    }
}
var findIndex = (id, state) => {
    var tasks = state;
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }

    });
    return result;
}
var saveLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
export default myReducer; 