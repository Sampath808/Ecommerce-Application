import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  order: null,
  orders: [],
  status: "idle",
  error: "null",
};
export const getOrder = createAsyncThunk(
  "order/getOrder",
  async ({ orderId }) => {
    try {
      if (!orderId) {
        throw new Error("Missing required parameters.");
      }
      const response = await axios.get(
        `http://localhost:8080/order/${orderId}`
      );
      const data = await response.data;
      return data;
    } catch (exception) {
      console.error(exception.message);
      return rejectWithValue(exception.response?.data || "Failed to get order");
    }
  }
);

export const updateStatus = createAsyncThunk(
  "order/updateStatus",
  async ({ orderId }) => {
    const id = Number(orderId);
    try {
      if (!id) {
        throw new Error("Missing required parameters.");
      }
      const response = await axios.get(
        `http://localhost:8080/order/statusUpdate/${id}`
      );
      const data = await response.data;
      return data;
    } catch (exception) {
      console.error(exception.message);
      return rejectWithValue(
        exception.response?.data || "Failed to update order status"
      );
    }
  }
);

export const fetchOrders = createAsyncThunk("order/fetchOrders", async () => {
  try {
    const response = await axios.get(`http://localhost:8080/orders/1`);
    const data = await response.data;
    return data;
  } catch (exception) {
    console.error(exception.message);
    return rejectWithValue(exception.response?.data || "Failed to get orders");
  }
});

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
    resetOrder: (state) => {
      state.order = null;
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
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.status = "success";
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.order = action.payload;
        state.status = "success";
      })
      .addCase(updateStatus.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.status = "success";
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      });
  },
});

const { actions, reducer } = orderSlice;
export const { resetOrderApiStatus, resetOrder } = actions;
export default reducer;
