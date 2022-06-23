const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TODOS":
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
