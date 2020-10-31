import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED } from '../redux/actions/filter-actions';
import { addTodo, toggleTodo } from '../redux/actions/todos-actions';
import Filter from './Filter';

const Todos = ({ todos, filter, addTodo, toggleTodo }) => {
  const initialState = { text: '' };
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ text: values.text });
    setValues(initialState);
  };

  const clickTask = (todo) => {
    toggleTodo(todo);
  };

  const getVisibleTodos = (filter, todos) => {
    switch (filter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case SHOW_NOT_COMPLETED:
        return todos.filter((t) => !t.completed);
      default:
        return todos;
    }
  };

  return (
    <section>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Todo:
          <input type="text" name="text" value={values.text} onChange={handleInputChange} />
        </label>
        <input type="submit" value="Add Todo" />
      </form>
      <Filter />
      <ul>
        {getVisibleTodos(filter, todos).map((todo) => (
          <li className={todo.completed ? 'line-through' : ''} key={todo.id}>
            <span className="todo" onClick={() => clickTask(todo)}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filter,
});

export default connect(mapStateToProps, { addTodo, toggleTodo })(Todos);
