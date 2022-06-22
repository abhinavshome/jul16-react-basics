import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";

const store = createStore(
  combineReducers({
    counter: counterReducer,
    todos: todoReducer,
    filters: filterReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
