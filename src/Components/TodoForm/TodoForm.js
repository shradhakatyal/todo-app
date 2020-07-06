import React, { useState } from 'react';

import './TodoForm.scss';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) {
      return;
    }
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      placeholder='Add task'
      className='input'
      value={value}
      onChange={e => setValue(e.target.value)}
      />
      <button className='add-todo-button'>Add</button>
    </form>
  );
}

export default TodoForm;