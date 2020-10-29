import { SET_FILTER, SHOW_ALL } from '../actions/filter-actions';

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;

    default:
      return state;
  }
};

export default visibilityFilter;
