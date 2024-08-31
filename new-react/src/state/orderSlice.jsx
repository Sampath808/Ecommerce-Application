import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  order: null,
  orders: [],
  status: "idle",
  error: "null",
};

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
      const data = await response.data;
      return data;
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
  reducers: {
    resetOrderApiStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.status = "success";
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

const { actions, reducer } = orderSlice;
export const { resetOrderApiStatus } = actions;
export default reducer;
