import { useState } from "react";

const AddBookForm = ({ onAddBook }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const price = e.target.elements.price.value;
    const rating = e.target.elements.rating.value;

    if (!title) {
      setError("Title has to be there");
      return;
    }

    if (!author) {
      setError("Author has to be there");
      return;
    }

    if (!price) {
      setError("price has to be there");
      return;
    }

    setError("");

    const newBook = {
      title: title,
      author: author,
      price: price,
      rating: rating,
    };
    onAddBook(newBook);
  };
  return (
    <div>
      <div style={{ color: "red" }}>{error}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input name="title" type="text" />
        </div>
        <div>
          <label>Author</label>
          <input name="author" type="text" />
        </div>
        <div>
          <label>Price</label>
          <input name="price" type="number" />
        </div>
        <div>
          <label>Rating</label>
          <select name="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
