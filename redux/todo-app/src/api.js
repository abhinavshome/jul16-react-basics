import axios from "axios";

export const loadTodos = () => {
  return axios.get("http://localhost:3000/todos");
};

export const addTodo = (todo) => {
  return axios.post("http://localhost:3000/todos", todo);
};
