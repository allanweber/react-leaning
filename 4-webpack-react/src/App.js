import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import Todos from './components/Todos';
import store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
        <hr />
        <Todos />
      </Provider>
    );
  }
}

export default hot(App);
