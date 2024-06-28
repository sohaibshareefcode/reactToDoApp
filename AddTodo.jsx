


import React, { useState } from 'react';


function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');

  return (
    <div className="add-todo-container">
      <input
        className="add-todo-input"
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="add-todo-button"
        onClick={() => {
          setTitle('');
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
