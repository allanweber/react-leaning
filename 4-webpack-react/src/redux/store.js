import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import counter from './reducers/counter';
import visibilityFilter from './reducers/filter';
import todos from './reducers/todos';

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  count: counter,
  todos: todos,
  filter: visibilityFilter,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// const store = createStore(counter);

export default store;
