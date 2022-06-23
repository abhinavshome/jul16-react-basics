import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.label} || {todo.assignee} || {todo.status ? "DONE" : "NOT DONE"}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
