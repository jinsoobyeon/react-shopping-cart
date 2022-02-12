import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductsState {
  productsList: Array<object>;
}

const initialState: ProductsState = {
  productsList: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsList = [...state.productsList];
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsList.push(...state.productsList, ...action.payload);
      })
      .addCase(getProducts.rejected, (_, action) => {
        console.log(action.error.message);
      });
  },
});

export const getProducts = createAsyncThunk(`products/get`, async () => {
  const response = await axios.get("http://localhost:3003/products");
  return response.data;
});

export default productsSlice.reducer;
