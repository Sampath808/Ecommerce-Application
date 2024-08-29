import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
  totalQuantity: 0,
  totalAmount: 0,
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.get("http://localhost:8080/cartItems/1");
  return response.data.map((item) => ({
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
      const response = await axios.post("http://localhost:8080/cart/save", {
        customerId,
        productId,
        quantity,
      });
      return response.data.map((item) => ({
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

// export const { addToCart, removeFromCart } = cartSlice.actions;

// addToCart: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         existingItem.quantity += 1; //make this increment quantity in cart table
//       } else {
//         state.items.push({
//           ...action.payload,
//         });
//       }
//       state.totalQuantity += 1;
//       state.totalAmount += action.payload.price;
//     },
//     removeFromCart: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         state.totalQuantity -= 1;
//         state.totalAmount -= existingItem.price;
//         if (existingItem.quantity === 1) {
//           state.items = state.items.filter(
//             (item) => item.id !== action.payload.id
//           );
//         } else {
//           existingItem.quantity -= 1;
//           existingItem.totalPrice -= existingItem.price;
//         }
//       }
//     },
