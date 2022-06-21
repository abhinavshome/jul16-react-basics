import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = ({ books }) => {
  const { bookId } = useParams();
  const book = books.find((b) => b.id == bookId);
  return <div>{JSON.stringify(book)}</div>;
};

export default BookDetail;
