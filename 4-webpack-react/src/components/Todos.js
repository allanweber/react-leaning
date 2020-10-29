import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../redux/actions/todos-actions';
import Filter from './Filter';

const Todos = ({ todos, addTodo, toggleTodo }) => {
  const initialState = { text: '' };
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const maxId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    addTodo({ text: values.text, id: maxId });
    setValues(initialState);
  };

  const clickTask = (todo) => {
    toggleTodo(todo);
  };

  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Todo:
          <input type="text" name="text" value={values.text} onChange={handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Filter />
      <div>
        {todos.map((todo) => (
          <div className={todo.completed ? 'line-through' : ''} key={todo.id}>
            <span className="todo" onClick={() => clickTask(todo)}>
              {todo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { addTodo, toggleTodo })(Todos);
