import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { decodeToken } from "../services/JwtDecode";
import { useEffect } from "react";

const initialState = {
  customer: null,
  status: "idle",
};

function storeToken(token) {
  localStorage.setItem("jwtToken", token);
}

export const validateLogin = createAsyncThunk(
  "customer/validateLogin",
  async ({ email, password }) => {
    try {
      if (!email || !password) {
        throw new Error("Missing required parameters.");
      }
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      const token = response.data.token;
      storeToken(token);
    } catch (exception) {
      console.error("Error during login: ", exception.message);
    }
  }
);

export const registerCustomer = createAsyncThunk(
  "customer/registerCustomer",
  async ({ userName, phoneNo, email, password, state }) => {
    try {
      if (!userName || !phoneNo || !email || !password || !state) {
        throw new Error("Missing required parameters.");
      }
      const response = await axios.post("http://localhost:8080/auth/signup", {
        userName,
        phoneNo,
        email,
        password,
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
  reducers: {
    setUser: (state, action) => {
      state.customer = action.payload;
    },
    clearUser: (state) => {
      state.customer = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCustomer.fulfilled, (state, action) => {
        state.customer = action.payload;
        state.status = "success";
      })
      .addCase(registerCustomer.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(validateLogin.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(validateLogin.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { setUser, clearUser } = customerSlice.actions;
export default customerSlice.reducer;
