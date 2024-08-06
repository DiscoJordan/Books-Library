import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToggleFavBook, deleteBook } from "../Redux/books/actionCreators";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { selectTitleFilter, selectAuthorFilter } from "../Redux/slices/filterSlice";

function BookList() {
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const dispatch = useDispatch();
  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
  };
  const handleFavorite = (bookId) => {
    dispatch(ToggleFavBook(bookId));
  };
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(titleFilter.toLowerCase())
  ).filter((book) =>
    book.author.toLowerCase().includes(authorFilter.toLowerCase())
  );
  return (
    <div className="app-block book-list">
      <h2>BookList</h2>

      {filteredBooks.length > 0 ? (
        <ul className="book-item">
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {" "}
                {++i}. {book.title} by <b>{book.author}</b>,<i> {book.year}</i>
              </div>
              <div className="book-actions">
                {
                  <div
                    className="circle star-icon"
                    onClick={() => handleFavorite(book.id)}
                  >
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
