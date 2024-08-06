import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToggleFavBook, deleteBook } from "../Redux/books/actionCreators";

import { MdOutlineDeleteForever } from "react-icons/md";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
  };
  const handleFavorite = (bookId)=>{
    dispatch(ToggleFavBook(bookId));
  }
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
                {
                  <div className="circle star-icon" onClick={()=>handleFavorite(book.id)}> 
                    {book.isFav ? <BsBookmarkHeartFill /> : <BsBookmarkHeart />}
                  </div>
                }

                <div onClick={() => handleDelete(book.id)} className="circle">
                  <MdOutlineDeleteForever className="delete-icon" />
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
