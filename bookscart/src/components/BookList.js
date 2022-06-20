import { useState } from "react";
import AddBookForm from "./AddBookForm";
import Book from "./Book";
import Cart from "./Cart";
import Filters from "./Filters";

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
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
  });
  const [filters, setFilters] = useState({
    topRated: false,
    lessThan20: false,
  });

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

  const addToCart = (book) => {
    const newCart = { ...cart };
    let item = cart.items.find((i) => i.itemId === book.id);
    if (item) {
      item.qty++;
    } else {
      item = {
        itemId: book.id,
        name: book.title,
        qty: 1,
        price: book.price,
      };
      newCart.items.push(item);
    }

    newCart.totalPrice += book.price;
    setCart(newCart);
  };

  const toggleFilter = (filterName) => {
    const newFilters = { ...filters };
    newFilters[filterName] = !newFilters[filterName];
    setFilters(newFilters);
  };

  return (
    <div>
      <AddBookForm onAddBook={addBook} />
      <hr />
      <Cart cart={cart} />
      <hr />
      <Filters filters={filters} onFilterToggle={toggleFilter} />
      <hr />
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          onRateUp={rateUp}
          onRateDown={rateDown}
          onAddToCart={addToCart}
          filters={filters}
        />
      ))}
    </div>
  );
};

export default BookList;
