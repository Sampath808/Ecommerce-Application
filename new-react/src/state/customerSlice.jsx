import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiCall } from "../services/ApiService";

const initialState = {
  customer: null,
  status: "idle",
  error: null,
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
      console.error(exception.message);
      return rejectWithValue({
        message: exception.response?.data || "Failed to login",
        status: exception.response?.status,
      });
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
      return rejectWithValue({
        message: exception.response?.data || "Failed to register",
        status: exception.response?.status,
      });
    }
  }
);

export const updateUserName = createAsyncThunk(
  "customer/updateCustomer",
  async ({ newName }) => {
    try {
      if (!newName) {
        throw new Error("Missing required parameters.");
      }
      return await apiCall(
        "GET",
        "/customer/userNameUpdate",
        {
          newName,
        },
        undefined
      );
    } catch (exception) {
      console.error(exception.message);
      return rejectWithValue({
        message: exception.response?.data || "Failed to update username",
        status: exception.response?.status,
      });
    }
  }
);

export const updatePhoneNo = createAsyncThunk(
  "customer/updatePhoneNo",
  async ({ newNumber }) => {
    try {
      if (!newNumber) {
        throw new Error("Missing required parameters.");
      }
      return await apiCall(
        "GET",
        "/customer/phoneNoUpdate",
        {
          newNumber,
        },
        undefined
      );
    } catch (exception) {
      console.error(exception.message);
      return rejectWithValue({
        message: exception.response?.data || "Failed to update phone number",
        status: exception.response?.status,
      });
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
      .addCase(registerCustomer.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })
      .addCase(validateLogin.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(validateLogin.rejected, (state) => {
        state.error = action.payload;
        state.status = "failed";
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.customer = action.payload;
        state.status = "success";
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      });
  },
});
export const { setUser, clearUser } = customerSlice.actions;
export default customerSlice.reducer;
