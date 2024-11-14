// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
    return (
        <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
            <button onClick={() => onDelete(todo._id)}>Delete</button>
        </div>
    );
};

export default TodoItem;

