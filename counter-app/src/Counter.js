import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  );
};

export default Counter;
