import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const e = (
  <div>
    <h1>Hello World</h1>
    <i>Welcome to teachmint</i>
  </div>
);
const fruits = ["Mango", "Guava", "Banana", "Muskmelon"];

const FruitList = () => {
  const handleFruitClick = (fruit) => {
    console.log(`You clicked on ${fruit}`);
  };
  return (
    <ul>
      {fruits.map((f, i) => (
        <li key={i} onClick={() => handleFruitClick(f)}>
          {f}
        </li>
      ))}
    </ul>
  );
};

const WelcomeText = () => {
  return (
    <div>
      <h3>Welcome home</h3>
      <FruitList />
    </div>
  );
};

root.render(<WelcomeText />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
