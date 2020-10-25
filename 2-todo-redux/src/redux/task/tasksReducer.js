import { FETCH_TASKS, TOGGLE_COMPLETED, ADD_TASK, REMOVE_TASK } from './taskTypes';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        items: action.payload,
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        items: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        items: action.payload,
      };

    case REMOVE_TASK:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}
