import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../redux/selectors";
// import store from "./redux/store";

// useSelector is something like this
// const useSelector = (f) => {
//   const state = store.getState();
//   const r= f(state);
//   return r
// };

const Counter = () => {
  const counter = useSelector(counterSelector);
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
