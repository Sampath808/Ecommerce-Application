import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "./productReducer.js";

const productsStore = createStore(productReducer, applyMiddleware(thunk));
export default productsStore;
