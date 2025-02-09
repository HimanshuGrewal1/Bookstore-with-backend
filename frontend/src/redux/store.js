import { configureStore } from '@reduxjs/toolkit';
import cardReducer from "../redux/features/card/cardslice";
import languageReducer from "./features/language/languageslice";
import booksapi from './features/books/books';
import ordersapi from './features/orders/orders'

export const store = configureStore({
  reducer: {
    card: cardReducer, 
    language: languageReducer,
    [booksapi.reducerPath]:booksapi.reducer,
    [ordersapi.reducerPath]:ordersapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(booksapi.middleware,ordersapi.middleware)
});
 