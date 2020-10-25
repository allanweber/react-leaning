import { FETCH_TASKS, TOGGLE_COMPLETED, ADD_TASK, REMOVE_TASK } from './taskTypes';

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
    type: TOGGLE_COMPLETED,
    payload: [...tasks],
  });
};

export const addTodo = (name) => (dispatch) => {
  const maxId = tasks.reduce((max, task) => (task.id > max ? task.id : max), tasks[0].id);

  tasks.unshift({ id: maxId + 1, name: name, completed: false });
  dispatch({
    type: ADD_TASK,
    payload: [...tasks],
  });
};

export const removeTodo = (id) => (dispatch) => {
  const task = tasks.find((task) => task.id === id);
  tasks.splice(tasks.indexOf(task), 1);
  dispatch({
    type: REMOVE_TASK,
    payload: [...tasks],
  });
};
