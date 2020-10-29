export const increment = () => (dispatch) => {
  dispatch({
    type: INCREMENT,
    payload: 1,
  });
};

export const decrement = () => (dispatch) => {
  dispatch({
    type: DECREMENT,
    payload: 1,
  });
};

export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';
