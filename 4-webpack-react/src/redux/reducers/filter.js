import { SET_FILTER, SHOW_ALL } from '../actions/filter-actions';

const filter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;

    default:
      return state;
  }
};

export default filter;
