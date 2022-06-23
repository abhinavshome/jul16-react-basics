import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, loadTodos } from "../api";

const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    const res = await loadTodos();
    dispatch({ type: "LOAD_TODOS", payload: res.data });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Label</th>
          <th>Assignee</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.label}</td>
            <td>{todo.assignee}</td>
            <td>{todo.status ? "DONE" : "NOT DONE"}</td>
            <td>
              <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
