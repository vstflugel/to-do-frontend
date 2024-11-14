import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5050'});

export const fetchTodos = () => API.get("/to-do");
export const createTodo = (newTodo) => API.post("/to-do", newTodo);
export const updateTodo = (id, updatedTodo) => API.patch(`/to-do/${id}`, updatedTodo);
export const deleteTodo = (id) => API.delete(`/to-do/${id}`);
