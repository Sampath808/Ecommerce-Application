import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orders: [],
  orderId: 0,
  orderItems: [],
  status: "idle",
  error: "null",
};

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async ({ orderId }) => {
    const response = await axios.get(
      `http://localhost:8080/orderItems/${orderId}`
    );
    return response.data;
  }
);

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async ({
    orderStatus,
    amount,
    customerId,
    paymentType,
    paymentReference,
  }) => {
    try {
      if (
        !customerId ||
        !orderStatus ||
        !amount ||
        !paymentType ||
        !paymentReference
      ) {
        throw new Error("Missing required parameters.");
      }
      const response = await axios.post("http://localhost:8080/orders/save", {
        orderStatus,
        amount,
        customerId,
        paymentType,
        paymentReference,
      });
      return response.data;
    } catch (exception) {
      console.error(exception.message);
      return rejectWithValue(
        exception.response?.data || "Failed to update orders"
      );
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.status = "success";
        state.orderItems = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = "success";
        state.orderId = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
