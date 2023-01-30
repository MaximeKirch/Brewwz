import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import beersReducer from "../Reducers/beersReducer";
import cardReducer from "../Reducers/cardReducer";

export const store = configureStore({
  reducer: {
    products: beersReducer,
    card: cardReducer
  },
});

setupListeners(store.dispatch);
