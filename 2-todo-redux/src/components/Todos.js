import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTasks, toggleCompleted, removeTodo } from '../redux/task/taskActions';

const Todos = ({ tasks, fetchTasks, toggleCompleted, removeTodo }) => {
  useEffect(() => fetchTasks());

  const clickTask = (id) => {
    toggleCompleted(id);
  };

  const removeTask = (id) => {
    removeTodo(id);
  };

  return (
    <div>
      {tasks.map((todo) => (
        <div className={todo.completed ? 'line-through' : ''} key={todo.id}>
          <span onClick={() => clickTask(todo.id)}>{todo.name}</span>
          <button type="button" onClick={() => removeTask(todo.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.items,
});

export default connect(mapStateToProps, { fetchTasks, toggleCompleted, removeTodo })(Todos);
