import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../services/ApiService";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiCall("GET", "/products", {}, undefined);
      return response.map((product) => ({
        ...product,
        imgUrl: "http://localhost:8080/images/" + product.imgUrl,
      }));
    } catch (error) {
      console.error(error.message);
      return rejectWithValue({
        message: error.response?.data || "Failed to fetch products",
        status: error.response?.status,
      });
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
