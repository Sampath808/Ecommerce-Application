import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    order: orderSlice,
  },
});

export default store;
