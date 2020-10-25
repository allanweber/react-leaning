import { FETCH_TASKS } from './taskTypes';

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

    default:
      return state;
  }
}
