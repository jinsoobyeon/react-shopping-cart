import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cart, Product } from "../types/dto";

interface CartsState {
  cartsList: Array<Cart>;
}

const initialState: CartsState = {
  cartsList: [],
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.cartsList.forEach((cart) => {
        if (cart.id === action.payload.id) {
          if (cart.count < 20) {
            cart.count = ++action.payload.count;
          }
        }
      });
    },
    decrement: (state, action) => {
      state.cartsList.forEach((cart) => {
        if (cart.id === action.payload.id) {
          if (cart.count > 1) {
            cart.count = --action.payload.count;
          }
        }
      });
    },
    check: (state, action) => {
      state.cartsList.forEach((cart) => {
        if (cart.id === action.payload.id) {
          cart.checked = !cart.checked;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarts.pending, (state) => {
        state.cartsList = [...state.cartsList];
      })
      .addCase(getCarts.fulfilled, (state, action) => {
        state.cartsList = [...action.payload];
        state.cartsList.forEach((cart) => {
          cart.count = 1;
          cart.checked = true;
        });
      })
      .addCase(getCarts.rejected, (_, action) => {
        console.log(action.error.message);
      });

    builder
      .addCase(postCart.pending, (state) => {
        state.cartsList = [...state.cartsList];
      })
      .addCase(postCart.fulfilled, (_, action) => {
        console.log(action.payload);
      })
      .addCase(postCart.rejected, (_, action) => {
        console.log(action.error.message);
      });
  },
});

export const getCarts = createAsyncThunk("cart/get", async () => {
  const response = await axios({
    method: "get",
    url: "http://localhost:3003/carts",
    headers: { "Cache-Control": "no-cache" },
  });
  return response.data;
});

export const postCart = createAsyncThunk(
  "cart/post",
  async (product: Product) => {
    const response = await axios.post("http://localhost:3003/carts", {
      product,
    });
    return response.data;
  }
);

export const { increment, decrement, check } = cartsSlice.actions;
export default cartsSlice.reducer;
