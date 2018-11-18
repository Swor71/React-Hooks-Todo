import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add a todo"
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'New React Hooks',
      isCompleted: false
    },
    {
      text: 'New React Hooks 2',
      isCompleted: false
    },
    {
      text: 'New React Hooks 3',
      isCompleted: false
    }
  ]);

  const handleAddTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleCompleteTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const handleDeleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={handleCompleteTodo} deleteTodo={handleDeleteTodo} />
        ))}
        <TodoForm addTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default App;
