import { FETCH_TASKS } from './taskTypes';

const tasks = [
  { id: 1, name: 'task 1', completed: true },
  { id: 2, name: 'task 2', completed: false },
  { id: 3, name: 'task 3', completed: false },
  { id: 4, name: 'task 4', completed: false },
  { id: 5, name: 'task 5', completed: false },
];

export const fetchTasks = () => (dispatch) => {
  dispatch({
    type: FETCH_TASKS,
    payload: tasks,
  });
};

export const toggleCompleted = (id) => (dispatch) => {
  const task = tasks.find((todo) => todo.id === id);
  task.completed = !task.completed;

  dispatch({
    type: FETCH_TASKS,
    payload: [...tasks],
  });
};
