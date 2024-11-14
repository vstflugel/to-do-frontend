// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import { fetchTodos, deleteTodo } from '../api';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            const { data } = await fetchTodos();
            setTodos(data);
        };
        getTodos();
    }, []);

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter(todo => todo._id !== id));
    };

    return (
        <div>
            <h2>To-Do List</h2>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default TodoList;

