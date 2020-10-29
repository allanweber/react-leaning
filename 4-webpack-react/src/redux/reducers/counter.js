import { DECREMENT, INCREMENT } from '../actions/counter-actions';

export default function (state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
}
