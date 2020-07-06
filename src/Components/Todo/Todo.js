import React from 'react';

import './Todo.scss';

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
  return (
    <div className={todo.isCompleted ? 'todo completed' : 'todo'}>
      <p>{todo.text}</p>
      <div className='button-container'>
        <button className='complete-button' onClick={() => completeTodo(index)}>Complete</button>
        <button className='delete-button' onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;