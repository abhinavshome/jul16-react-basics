import { useState } from "react";

const Home = ({ tasks, onStatusChange }) => {
  const [status, setStatus] = useState("BACKLOG");

  const renderTasks = () => {
    return tasks
      .filter((t) => t.status === status)
      .map((task) => renderTask(task));
  };

  const renderTask = (task) => {
    return (
      <tr key={task.id}>
        <td>{task.id}</td>
        <td>{task.label}</td>
        <td>{task.assignee}</td>
        <td>
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value)}
          >
            <option>DONE</option>
            <option>IN_PROGRESS</option>
            <option>BACKLOG</option>
          </select>
        </td>
      </tr>
    );
  };

  return (
    <>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>DONE</option>
        <option>IN_PROGRESS</option>
        <option>BACKLOG</option>
      </select>
      <hr />
      Current Filters: Status: {status}
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Task</td>
            <td>Assignee</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>{renderTasks()}</tbody>
      </table>
    </>
  );
};

export default Home;
