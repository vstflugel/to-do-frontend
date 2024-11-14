// src/App.js
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
    const [currentTodo, setCurrentTodo] = useState(null);

    return (
        <div>
            <h1>To-Do App</h1>
            <TodoForm currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
            <TodoList setCurrentTodo={setCurrentTodo} />
        </div>
    );
};

export default App;

