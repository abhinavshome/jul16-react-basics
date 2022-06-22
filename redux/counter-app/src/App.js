import Counter from "./components/Counter";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Filters />
      <TodoList />
    </div>
  );
}

export default App;
