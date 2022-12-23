import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  tmpProducts: null,
  isLoading: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.tmpProducts = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
