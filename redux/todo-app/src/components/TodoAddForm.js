import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, loadTodos } from "../api";

const TodoAddForm = () => {
  const [label, setLabel] = useState("");
  const [assignee, setAssignee] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      label: label,
      assignee: assignee,
      done: false,
    };
    await addTodo(newTodo);
    const res = await loadTodos();
    dispatch({ type: "LOAD_TODOS", payload: res.data });

    // addTodo(newTodo).then(() => {
    //   loadTodos().then((res) => {
    //     dispatch({ type: "LOAD_TODOS", payload: res.data });
    //   });
    // });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
        <div>
          <label>Assignee</label>
          <input
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoAddForm;
