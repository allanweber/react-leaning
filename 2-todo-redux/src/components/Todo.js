import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/task/taskActions';

const Todo = ({ addTodo }) => {
  const initialState = { task: '' };
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(values.task);
    setValues(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" name="task" value={values.task} onChange={handleInputChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default connect(null, { addTodo })(Todo);
