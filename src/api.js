import axios from 'axios';

// const API = axios.create({baseURL: 'http://localhost:5050'});
 const API = axios.create({baseURL: 'https://to-do-frontend-red.vercel.app/'});

export const fetchTodos = () => API.get("/to-do");
export const createTodo = (newTodo) => API.post("/to-do", newTodo);
export const updateTodo = (id, updatedTodo) => API.patch(`/to-do/${id}`
