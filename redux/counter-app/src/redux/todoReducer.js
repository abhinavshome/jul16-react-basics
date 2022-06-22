const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat(action.payload);
    case "REMOVE_TODO":
      return state.filter((todo) => todo !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
