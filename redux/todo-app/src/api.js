import axios from "axios";

const URL = "http://localhost:3000/todos";

export const loadTodos = () => {
  return axios.get(URL);
};

export const addTodo = (todo) => {
  return axios.post(URL, todo);
};

export const deleteTodo = (todoId) => {
  return axios.delete(`${URL}/${todoId}`);
};

export const searchTodoByLabel = (text) => {
  return axios.get(`${URL}?label_like=${text}`);
};
