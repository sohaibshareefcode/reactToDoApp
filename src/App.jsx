

import { useState } from 'react';
import React from 'react';
import AddTodo from '../AddTodo';
import List from './List';
import "./App.css";

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => (t.id === nextTodo.id ? nextTodo : t))
    );
  }

  function handleDeleteTodo(ids) {
    if (Array.isArray(ids)) {
      setTodos(
        todos.filter((t) => !ids.includes(t.id))
      );
    } else {
      setTodos(
        todos.filter((t) => t.id !== ids)
      );
    }
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <List
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
