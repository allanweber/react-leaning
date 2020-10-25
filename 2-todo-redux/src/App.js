import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
