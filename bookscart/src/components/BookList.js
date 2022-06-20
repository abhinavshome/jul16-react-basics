import { useState } from "react";
import AddBookForm from "./AddBookForm";
import Book from "./Book";

const BookList = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Alchemist",
      price: 22,
      author: "Paulo Cohelo",
      rating: 2,
    },
    {
      id: 2,
      title: "Monk Who Sold his ferrari",
      price: 12,
      author: "Robin Sharma",
      rating: 3,
    },
    {
      id: 3,
      title: "Power of Now",
      price: 34,
      author: "Eckhart Tolle",
      rating: 5,
    },
    {
      id: 4,
      title: "Five point someone",
      price: 11,
      author: "Chetan Bhagat",
      rating: 1,
    },
  ]);

  const rateUp = (bookId) => {
    const newBooks = [...books];
    const book = newBooks.find((b) => b.id === bookId);
    if (book.rating < 5) {
      book.rating++;
    }
    setBooks(newBooks);
  };

  const rateDown = (bookId) => {
    const newBooks = [...books];
    const book = newBooks.find((b) => b.id === bookId);
    if (book.rating > 1) {
      book.rating--;
    }
    setBooks(newBooks);
  };

  const addBook = (book) => {
    console.log(book);
    book.id = books.length + 1;
    const newBooks = [...books];
    newBooks.unshift(book);
    setBooks(newBooks);
  };

  return (
    <div>
      <AddBookForm onAddBook={addBook} />
      <hr />
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          onRateUp={rateUp}
          onRateDown={rateDown}
        />
      ))}
    </div>
  );
};

export default BookList;
