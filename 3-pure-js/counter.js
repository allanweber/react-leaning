// import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// const span = document.createElement('span');
// span.className = 'title';
// document.body.appendChild(span);

// const createStore = (reducer) => {
//   let state;
//   let listeners = [];
//   const getState = () => state;

//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach((listener) => listener());
//   };

//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter((l) => l !== listener);
//     };
//   };

//   dispatch({});
//   return { getState, dispatch, subscribe };
// };
// const store = createStore(counter);
// console.log('-> Initial State: ' + store.getState());
// store.dispatch({ type: 'INCREMENT' });
// console.log('-> State After Dispatch: ' + store.getState());

const { createStore } = Redux;
const store = createStore(counter);

// const render = () => {
//   span.innerText = store.getState();
// };
// store.subscribe(render);
// render();
// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' });
// });

// const { createStore } = Redux;
// const store = createStore(counter);

// const Counter = ({ value }) => {
//   <h1>{value}</h1>;
// };

// const render = () => {
//   ReactDOM.render(<Counter value={store.getState()} />, document.getElementById('root'));
// };
// store.subscribe(render);
// render();

export { counter, store };
