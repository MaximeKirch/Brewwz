import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import beersReducer from "../Reducers/beersReducer";
import { cartReducer } from "../Reducers/cartReducer";

export const store = configureStore({
  reducer: {
    products: beersReducer,
    cart: cartReducer
  },
});

setupListeners(store.dispatch);
