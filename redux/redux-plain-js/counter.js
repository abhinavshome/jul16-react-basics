//Redux
//1. State
//1. Reducer function
//2. Actions

const counterReducer = (state = 1, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  if (action.type === "INCREMENT_BY") {
    return state + action.payload;
  }

  return state;
};

const store = Redux.createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  display();
});

const inc = () => {
  store.dispatch({ type: "INCREMENT" });
};

const incBy = (n) => {
  store.dispatch({ type: "INCREMENT_BY", payload: n });
};

const dec = () => {
  store.dispatch({ type: "DECREMENT" });
};

const display = () => {
  document.getElementById("counter").innerHTML = store.getState();
};

display();
