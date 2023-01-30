import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import beersReducer from "../Reducers/beersReducer";

export const store = configureStore({
  reducer: {
    products: beersReducer,
  },
});

setupListeners(store.dispatch);
