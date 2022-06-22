const initialState = {
  status: "ALL",
  assignee: "ANY",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATUS":
      return Object.assign({}, state, { status: action.payload });
    case "SET_ASSIGNEE":
      return Object.assign({}, state, { assignee: action.payload });
    default:
      return state;
  }
};

export default filterReducer;
