import React, { useState } from 'react';
import './App.css';

function Todo({ todo }) {
  return <div className="todo">{todo.text}</div>;
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

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
