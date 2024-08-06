import React from "react";
import { useSelector } from "react-redux";

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h2>BookList</h2>

      {books.length > 0 ? (
        <ul className="book-item">
          {books.map((book, i) => (
            <li key={book.id}>
              <div class book-info> {++i}. {book.title} by <b>{book.author}</b></div>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <h4>No books available</h4>
        </>
      )}
    </div>
  );
}

export default BookList;
