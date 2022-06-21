import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import AddTask from "./AddTask";
import "./App.css";
import Home from "./Home";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, label: "Write CSS", assignee: "Abhinav", status: "DONE" },
    { id: 2, label: "Write HTML", assignee: "Rahul", status: "BACKLOG" },
    {
      id: 3,
      label: "Write React",
      assignee: "Mithilesh",
      status: "IN_PROGRESS",
    },
    { id: 4, label: "Write Redux", assignee: "Nitish", status: "DONE" },
  ]);

  const changeStatus = (taskId, newStatus) => {
    const newTasks = [...tasks];
    const task = newTasks.find((t) => t.id === taskId);
    task.status = newStatus;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavLink to="/">Home</NavLink> |
          <NavLink to="/add-task">Add Task</NavLink>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Home tasks={tasks} onStatusChange={changeStatus} />}
          />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
