import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithId from "../../utils/createBookWithId";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setError } from "./errorSlice";

const initialState = {
  books: [],
  isLoadingViaAPI: false,
};

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      thunkAPI.rejectWithValue(error)
    //   throw error;
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
    toggleFavBook: (state, action) => {
      state.books.map((book) =>
        book.id === action.payload ? (book.isFav = !book.isFav) : book
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithId(action.payload, "API"));
      }
    });
    builder.addCase(fetchBook.rejected, (state) => {
        state.isLoadingViaAPI = false;
      });
  },
});

export const { addBook, deleteBook, toggleFavBook } = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectIsLoading = (state) => state.books.isLoadingViaAPI;

export default booksSlice.reducer;
