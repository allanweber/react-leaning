import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTasks, toggleCompleted } from '../redux/task/taskActions';

const Todos = ({ tasks, fetchTasks, toggleCompleted }) => {
  useEffect(() => fetchTasks());

  const clickTask = (id) => {
    toggleCompleted(id);
  };

  return (
    <div>
      <h1>Todos</h1>
      <div>
        {tasks.map((todo) => (
          <p
            className={todo.completed ? 'line-through' : ''}
            key={todo.id}
            onClick={() => clickTask(todo.id)}
            role="a">
            {todo.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.items,
});

export default connect(mapStateToProps, { fetchTasks, toggleCompleted })(Todos);
