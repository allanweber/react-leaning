import { v4 } from 'node-uuid';

export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    id: v4(),
    text: todo.text,
  });
};

export const toggleTodo = (todo) => (dispatch) => {
  dispatch({
    type: TOGGLE_TODO,
    ...todo,
  });
};

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
