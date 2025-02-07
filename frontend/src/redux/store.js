import { configureStore } from '@reduxjs/toolkit';
import cardReducer from "../redux/features/card/cardslice";
import languageReducer from "./features/language/languageslice";
import booksapi from './features/books/books';


export const store = configureStore({
  reducer: {
    card: cardReducer, 
    language: languageReducer,
    [booksapi.reducerPath]:booksapi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(booksapi.middleware)
});
