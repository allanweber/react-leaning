import React, { useState } from 'react';

const Todos = () => {
  const [todos, updateTodos] = useState([
    { id: 1, name: 'task 1', completed: false },
    { id: 2, name: 'task 2', completed: true },
  ]);

  const clicked = (id) => {
    const task = todos.find((todo) => todo.id === id);
    task.completed = !task.completed;
    updateTodos([...todos]);
  };

  return (
    <div>
      <h1>Todos</h1>
      <div>
        {todos.map((todo) => (
          <p
            className={todo.completed ? 'line-through' : ''}
            key={todo.id}
            onClick={() => clicked(todo.id)}
            role="a">
            {todo.name}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Todos;
