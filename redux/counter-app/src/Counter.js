import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  const [incBy, setIncBy] = useState(0);
  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <input
          type="text"
          value={incBy}
          onChange={(e) => setIncBy(e.target.value)}
        />
        <button
          onClick={() => dispatch({ type: "INCREMENT_BY", payload: +incBy })}
        >
          ++
        </button>
      </div>
    </div>
  );
};

export default Counter;
