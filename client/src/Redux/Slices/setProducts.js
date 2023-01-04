import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: null,
  error: null,
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
      state.status = action.payload.status;
    },
    setDetails: (state, action) => {
      state.isLoading = false;
      state.productDetail = action.payload.productDetail;
    },
    setStatus: (state, action) => {
      state.status = action.payload.status;
      state.error = action.payload.msg;
      state.isLoading = false;
    },
  },
});

export const { startLoadingProducts, setProducts, setDetails, setStatus } =
  productSlice.actions;
