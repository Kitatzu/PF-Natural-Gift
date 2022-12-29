import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetail: [],
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
    setDetails: (state, action) => {
      state.isLoading = false;
      state.productDetail = action.payload.productDetail;
    },
  },
});

export const { startLoadingProducts, setProducts, setDetails } =
  productSlice.actions;
