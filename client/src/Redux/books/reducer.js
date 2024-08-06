import * as a from "./actionTypes";

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];

    case a.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
      
    case a.TOGGLE_FAVBOOK: 
      return state.map((book) =>
        book.id === action.payload ? { ...book, isFav: !book.isFav } : book
      );


    default:
      return state;
  }
};

export default booksReducer;
