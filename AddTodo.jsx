
import { useState } from 'react';
import React from 'react';

function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      handleAddClick();
    }
  };

  return (
    <div className="add-todo-container">
      <input
        type="text"
        className="add-todo-input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task"
      />
      <button
        className="add-todo-button"
        onClick={handleAddClick}
        disabled={!inputValue.trim()}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
