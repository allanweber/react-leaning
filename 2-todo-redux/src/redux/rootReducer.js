import { combineReducers } from 'redux';
import tasksReducer from './task/tasksReducer';

export default combineReducers({
  tasks: tasksReducer,
});
