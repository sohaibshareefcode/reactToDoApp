

import { useState } from 'react';
import React from 'react';

function List({ todos, onChangeTodo, onDeleteTodo }) {
  const [selectedTodos, setSelectedTodos] = useState([]);

  const handleSelectTodo = (todoId) => {
    setSelectedTodos((prevSelectedTodos) =>
      prevSelectedTodos.includes(todoId)
        ? prevSelectedTodos.filter((id) => id !== todoId)
        : [...prevSelectedTodos, todoId]
    );
  };

  const handleDeleteSelected = () => {
    onDeleteTodo(selectedTodos);
    setSelectedTodos([]);
  };

  return (
    <div>
      {selectedTodos.length > 0 && (
        <button className="task-button delete-selected" onClick={handleDeleteSelected}>
          Delete Selected
        </button>
      )}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <Task
              todo={todo}
              onChange={onChangeTodo}
              onDelete={onDeleteTodo}
              onSelect={handleSelectTodo}
              isSelected={selectedTodos.includes(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Task({ todo, onChange, onDelete, onSelect, isSelected }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (e) => {
    onChange({
      ...todo,
      title: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    onSelect(todo.id);
  };

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={handleTitleChange}
        />
        <button className="task-button" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button className="task-button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <label className="task-label">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
      />
      {todoContent}
      <button className="task-button" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}

export default List;
