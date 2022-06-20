const Filters = ({ filters, onFilterToggle }) => {
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
    </div>
  );
};

export default Filters;
