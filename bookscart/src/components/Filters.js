import { useState } from "react";

const Filters = ({ filters, onFilterToggle }) => {
  const [rating, setRating] = useState(3);
  return (
    <div>
      <button
        style={{ backgroundColor: filters.topRated ? "yellow" : "lightgray" }}
        onClick={() => onFilterToggle("topRated")}
      >
        show top rated
      </button>
      <button
        style={{ backgroundColor: filters.lessThan20 ? "yellow" : "lightgray" }}
        onClick={() => onFilterToggle("lessThan20")}
      >
        show less than 20rs
      </button>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      {rating}
    </div>
  );
};

export default Filters;
