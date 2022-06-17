import { useState } from "react";
import "./MoveDot.css";

const MoveDot = () => {
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);

  return (
    <div>
      <div className="dot" style={{ left: x, top: y }}></div>
      <div>
        <button onClick={() => setX(x + 10)}>&rarr;</button>
        <button onClick={() => setX(x - 10)}>&larr;</button>
        <button onClick={() => setY(y + 10)}>&darr;</button>
        <button onClick={() => setY(y - 10)}>&uarr;</button>
      </div>
    </div>
  );
};

export default MoveDot;
