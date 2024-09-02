import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  customer: null,
  status: "idle",
};
export const validateLogin = createAsyncThunk(
  "customer/validateLogin",
  async ({ email, password }) => {
    try {
      if (!email || !password) {
        throw new Error("Missing required parameters.");
      }
      const response = await axios.get(
        "http://localhost:8080/validateCustomer",
        {
          email,
          password,
        }
      );
      const data = await response.data;
      return data;
    } catch (exception) {
      console.error(exception.message);
      return rejectWithValue(exception.response?.data || "Failed to login");
    }
  }
);

export const registerCustomer = createAsyncThunk(
  "customer/registerCustomer",
  async ({ userName, phoneNo, email, newPassword, state }) => {
    try {
      if (!userName || !phoneNo || !email || !newPassword || !state) {
        throw new Error("Missing required parameters.");
      }
      const response = await axios.post("http://localhost:8080/saveCustomer", {
        userName,
        phoneNo,
        email,
        newPassword,
        state,
      });
      const data = await response.data;
      return data;
    } catch (exception) {
      console.error(exception.message);
      return rejectWithValue(exception.response?.data || "Failed to register");
    }
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCustomer.fulfilled, (state, action) => {
        state.customer = action.payload;
        state.status = "success";
      })
      .addCase(registerCustomer.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default customerSlice.reducer;
