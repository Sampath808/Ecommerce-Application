import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./actionTypes";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await fetch("/products");
      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
