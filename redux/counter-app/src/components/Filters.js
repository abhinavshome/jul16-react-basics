import { useState } from "react";
import { useDispatch } from "react-redux";

const Filters = () => {
  const [status, setStatus] = useState("ALL");
  const [assignee, setAssignee] = useState("ANY");
  const dispatch = useDispatch();
  return (
    <div>
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          dispatch({ type: "SET_STATUS", payload: e.target.value });
        }}
      >
        <option>ALL</option>
        <option>NOT DONE</option>
        <option>DONE</option>
        <option>IN PROGRESS</option>
      </select>
      <select
        value={assignee}
        onChange={(e) => {
          setAssignee(e.target.value);
          dispatch({ type: "SET_ASSIGNEE", payload: e.target.value });
        }}
      >
        <option>ANY</option>
        <option>Rahul</option>
        <option>Manoj</option>
        <option>Shyam</option>
        <option>Raj</option>
      </select>
    </div>
  );
};

export default Filters;
