import React, { useState } from 'react';

import './App.css';
import Todo from './Components/Todo/Todo';
import TodoForm from './Components/TodoForm/TodoForm';


const App = () => {
  // useState gives us two things - the value and a function that modifies that value. It can be thought of as this.state and this.setState in class based components.
  const [todos, setTodos ] = useState([
    {
      text: 'Learn about react hooks',
      isCompleted: false,
    },
    {
      text: 'Build todo app',
      isCompleted: false,
    },
    {
      text: 'Play with Oggy',
      isCompleted: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1 className='heading'>Task List</h1>
      <div className='todo-list'>
        {
          todos.map((todo, index) => (
            <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            />
          ))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
