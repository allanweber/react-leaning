export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    ...todo,
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
