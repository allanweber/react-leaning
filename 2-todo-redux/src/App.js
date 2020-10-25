import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Todos from './components/Todos';
import Todo from './components/Todo';
import logo from './logo.svg';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Todos</h1>
        <Todo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
