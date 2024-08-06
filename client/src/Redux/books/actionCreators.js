import * as a from "./actionTypes";

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};
export const deleteBook = (BookId) => {
    return {
      type: a.DELETE_BOOK,
      payload: BookId,
    };
  };
  export const ToggleFavBook = (BookId) => {
    return {
      type: a.TOGGLE_FAVBOOK,
      payload: BookId,
    };
  };