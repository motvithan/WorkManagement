import * as types from './../constants/ActionTypes';
export const list_all = () => {
    return {
        type: types.LIST_ALL
    }
}
export const addWork = (task) => {
    return {
        type: types.ADD_WORK,
        task
    }
}
export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}
export const delWork = (id) => {
    return {
        type: types.DEL_WORK,
        id: id
    }
}
export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id: id
    }
}
export const updateWork = (task) => {
    return {
        type: types.UPDATE_WORK,
        task
    }
}