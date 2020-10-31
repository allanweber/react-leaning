import throttle from 'lodash/throttle';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from '../services/localStorage';
import counter from './reducers/counter';
import filter from './reducers/filter';
import todos from './reducers/todos';

const initialState = loadState();

const middleware = [thunk];

const reducers = combineReducers({
  counter,
  todos,
  filter,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000)
);

export default store;
