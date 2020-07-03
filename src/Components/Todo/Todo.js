import React from 'react';

import './Todo.scss';

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
  return (
    <div className={todo.isCompleted ? 'todo completed' : 'todo'}>
      {todo.text}
      <div>
        <button className='complete-button' onClick={() => completeTodo(index)}>Complete</button>
        <button className='delete-button' onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;