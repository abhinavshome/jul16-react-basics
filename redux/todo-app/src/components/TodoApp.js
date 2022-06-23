import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTodos } from "../api";
import TodoAddForm from "./TodoAddForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await loadTodos();
      dispatch({ type: "LOAD_TODOS", payload: res.data });
    })();
  }, []);

  // useEffect(() => {
  //   loadTodos().then((res) => {
  //     dispatch({ type: "LOAD_TODOS", payload: res.data });
  //   });
  // }, []);

  return (
    <div>
      <TodoAddForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
