// src/components/TodoForm.js
import React, { useState } from 'react';
import { createTodo, updateTodo } from '../api';

const TodoForm = ({ currentTodo, setCurrentTodo }) => {
    const [title, setTitle] = useState(currentTodo ? currentTodo.title : '');
    const [description, setDescription] = useState(currentTodo ? currentTodo.description : '');
    const [completed, setCompleted] = useState(currentTodo ? currentTodo.completed : false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTodo = { title, description, completed };
        
        if (currentTodo) {
            await updateTodo(currentTodo._id, newTodo);
            setCurrentTodo(null);
        } else {
            await createTodo(newTodo);
        }
        
        setTitle('');
        setDescription('');
        setCompleted(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="To-Do Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
                Completed
            </label>
            <button type="submit">{currentTodo ? 'Update' : 'Add'} To-Do</button>
        </form>
    );
};

export default TodoForm;

