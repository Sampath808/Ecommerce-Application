import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../services/ApiService";

const initialState = {
  order: null,
  orders: [],
  status: "idle",
  placeOrderStatus: "idle",
  error: null,
};

export const getOrder = createAsyncThunk(
  "order/getOrder",
  async ({ orderId }, { rejectWithValue }) => {
    try {
      if (!orderId) {
        throw new Error("Missing required parameters.");
      }
      return await apiCall("GET", `/order/${orderId}`, {}, undefined);
    } catch (error) {
      console.error(exception.message);
      return rejectWithValue({
        message: error.response?.data || "Failed to get order",
        status: error.response?.status,
      });
    }
  }
);

export const updateStatus = createAsyncThunk(
  "order/updateStatus",
  async ({ orderId }, { rejectWithValue }) => {
    const id = Number(orderId);
    try {
      if (!id) {
        throw new Error("Missing required parameters.");
      }
      return await apiCall("GET", `/order/statusUpdate/${id}`, {}, undefined);
    } catch (error) {
      console.error(exception.message);
      return rejectWithValue({
        message: error.response?.data || "Failed to update status",
        status: error.response?.status,
      });
    }
  }
);

export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (id, { rejectWithValue }) => {
    try {
      return await apiCall("GET", `/orders/` + id, {}, undefined);
    } catch (error) {
      console.log(error.message);
      return rejectWithValue({
        message: error.response?.data || "Failed to get orders",
        status: error.response?.status,
      });
    }
  }
);

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (
    { orderStatus, amount, customerId, paymentType, paymentReference },
    { rejectWithValue }
  ) => {
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
      return await apiCall(
        "POST",
        "/orders/save",
        {
          orderStatus,
          amount,
          customerId,
          paymentType,
          paymentReference,
        },
        undefined
      );
    } catch (error) {
      console.log(error.message);
      return rejectWithValue({
        message: error.response?.data || "Failed to place order",
        status: error.response?.status,
      });
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrderApiStatus: (state) => {
      state.status = "loaded";
    },
    resetOrder: (state) => {
      state.order = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.placeOrderStatus = "success";
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
