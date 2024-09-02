import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import orderSlice from "./orderSlice";
import customerSlice from "./customerSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    order: orderSlice,
    customer: customerSlice,
  },
});

export default store;
