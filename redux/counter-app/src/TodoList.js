import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
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
        <button
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: newTodo });
            setNewTodo("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <div>
            {todo}
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}
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
