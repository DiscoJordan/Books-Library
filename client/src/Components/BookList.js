import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBook } from "../Redux/books/actionCreators";

function BookList() {
  const books = useSelector((state) => state.books);
const dispatch = useDispatch()
  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId))
  };
  return (
    <div className="app-block book-list">
      <h2>BookList</h2>

      {books.length > 0 ? (
        <ul className="book-item">
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {" "}
                {++i}. {book.title} by <b>{book.author}</b>
              </div>
              <div className="book-actions">
                <div onClick={()=>handleDelete(book.id)} className="circle">
                  <span class="material-symbols-outlined">delete</span>
                </div>
              </div>
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
