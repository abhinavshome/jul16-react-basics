import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("NOT DONE");
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const filteredTodos = todos.filter(
    (t) =>
      (t.status === filters.status || filters.status === "ALL") &&
      (t.assignee === filters.assignee || filters.assignee === "ANY")
  );

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
          value={assignee}
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
                assignee: assignee,
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
        {filteredTodos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
