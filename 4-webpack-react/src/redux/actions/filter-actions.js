export const SET_FILTER = 'SET_FILTER';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_NOT_COMPLETED = 'SHOW_NOT_COMPLETED';

export const showAll = () => (dispatch) => {
  dispatch({
    type: SET_FILTER,
    filter: SHOW_ALL,
  });
};

export const showCompleted = () => (dispatch) => {
  dispatch({
    type: SET_FILTER,
    filter: SHOW_COMPLETED,
  });
};

export const showNotCompleted = () => (dispatch) => {
  dispatch({
    type: SET_FILTER,
    filter: SHOW_NOT_COMPLETED,
  });
};
