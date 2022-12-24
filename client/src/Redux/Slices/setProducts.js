import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  page: 0,
  isLoading: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setProducts: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.products = action.payload.products;
    },
  },
});

export const { startLoadingProducts, setProducts } = productSlice.actions;
