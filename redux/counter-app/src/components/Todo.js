import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {todo.label} || {todo.assignee} || {todo.status}
      <button
        onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.label })}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
