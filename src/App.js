import React, { useState } from 'react';

import './App.scss';
import Todo from './Components/Todo/Todo';
import TodoForm from './Components/TodoForm/TodoForm';


const App = () => {
  // useState gives us two things - the value and a function that modifies that value. It can be thought of as this.state and this.setState in class based components.
  const storedTodos = localStorage.getItem('todos');
  const [todos, setTodos ] = useState(storedTodos && JSON.parse(storedTodos).length ? JSON.parse(storedTodos) : []);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
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
