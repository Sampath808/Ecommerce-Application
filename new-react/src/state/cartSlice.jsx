import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiCall } from "../services/ApiService";

const initialState = {
  items: [],
  status: "idle",
  error: null,
  totalQuantity: 0,
  totalAmount: 0,
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async (id) => {
  const response = await apiCall("GET", "/cartItems/" + id);
  return response.map((item) => ({
    ...item,
    imgUrl: "http://localhost:8080/images/" + item.product.imgName,
  }));
});

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ customerId, productId, quantity }) => {
    try {
      if (
        !customerId ||
        !productId ||
        quantity == null ||
        quantity == undefined
      ) {
        throw new Error("Missing required parameters.");
      }
      const response = await apiCall(
        "POST",
        "/cart/save",
        {},
        {
          customerId,
          productId,
          quantity,
        }
      );
      return response.map((item) => ({
        ...item,
        imgUrl: "http://localhost:8080/images/" + item.product.imgName,
      }));
    } catch (exception) {
      console.error(exception.message);
      return rejectWithValue(
        exception.response?.data || "Failed to update cart"
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.totalAmount = state.items.reduce(
          (sum, item) => sum + item.product.sellingPrice * item.quantity,
          0
        );
        state.totalQuantity = state.items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.status = "added to cart";
        state.items = action.payload;
        state.totalAmount = state.items.reduce(
          (sum, item) => sum + item.product.sellingPrice * item.quantity,
          0
        );
        state.totalQuantity = state.items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
