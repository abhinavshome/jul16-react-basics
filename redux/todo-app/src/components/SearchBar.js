import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTodoByLabel } from "../api";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearchTextChange = async (e) => {
    const text = e.target.value;
    setSearchText(text);
    const res = await searchTodoByLabel(text);
    dispatch({ type: "LOAD_TODOS", payload: res.data });
  };

  return (
    <div>
      BE{" "}
      <input type="text" value={searchText} onChange={handleSearchTextChange} />
    </div>
  );
};

export default SearchBar;
