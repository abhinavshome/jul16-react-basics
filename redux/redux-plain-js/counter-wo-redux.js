//Redux
//1. State
//1. Reducer function
//2. Actions

let counter = 1;

const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  if (action.type === "INCREMENT_BY") {
    return state + action.payload;
  }
};

const dispatch = (action) => {
  console.log("PREV STATE: ", counter);
  console.log("ACTION: ", action);
  counter = counterReducer(counter, action);
  console.log("CURRENT STATE: ", counter);
  console.log("=========================");
  display();
};

const inc = () => {
  dispatch({ type: "INCREMENT" });
};

const incBy = (n) => {
  dispatch({ type: "INCREMENT_BY", payload: n });
};

const dec = () => {
  dispatch({ type: "DECREMENT" });
};

const display = () => {
  document.getElementById("counter").innerHTML = counter;
};

display();
