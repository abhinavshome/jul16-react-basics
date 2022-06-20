const AddBookForm = ({ onAddBook }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      price: e.target.elements.price.value,
      rating: e.target.elements.rating.value,
    };
    onAddBook(newBook);
  };
  return (
    <div>
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
