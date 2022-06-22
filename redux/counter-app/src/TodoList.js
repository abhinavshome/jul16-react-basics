import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [assginee, setAssignee] = useState("");
  const [status, setStatus] = useState("NOT DONE");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <input
          type="text"
          value={assginee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>NOT DONE</option>
          <option>DONE</option>
          <option>IN PROGRESS</option>
        </select>
        <button
          onClick={() => {
            dispatch({
              type: "ADD_TODO",
              payload: {
                label: newTodo,
                assginee: assginee,
                status: status,
              },
            });
            setNewTodo("");
            setAssignee("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <div>
            {todo.label} || {todo.assginee} || {todo.status}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", payload: todo.label })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
