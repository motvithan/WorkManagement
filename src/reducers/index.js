import {combineReducers} from 'redux';
import tasks from './tasks';
import toggleForm from './toggleForm';
import updateWork from './updateWork';
const myReducer = combineReducers({
    tasks, // tasks
    toggleForm, // toggleForm
    updateWork
});
export default myReducer;