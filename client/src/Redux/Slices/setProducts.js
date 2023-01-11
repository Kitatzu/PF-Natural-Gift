import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  tempProducts: [],
  status: null,
  error: null,
  productDetail: [],
  page: 0,
  isLoading: false,
  filters: {
    prices: {
      min: 0,
      max: 0,
    },
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterPrice: (state, action) => {
      state.filters.prices[action.payload.name] = action.payload.value;
      console.log(state.filters);
    },
    filterProduct: (state) => {
      if (parseInt(state.filters.prices.min) > 0)
        state.tempProducts = state.products.filter(
          (p) => parseFloat(p.price) > parseFloat(state.filters.prices.min)
        );

      if (parseInt(state.filters.prices.max) > 0)
        state.tempProducts = state.products.filter(
          (p) => parseFloat(p.price) < parseFloat(state.filters.prices.max)
        );

      if (
        parseInt(state.filters.prices.min) > 0 &&
        parseInt(state.filters.prices.max) > 0
      )
        state.tempProducts = state.products.filter(
          (p) =>
            parseFloat(p.price) < parseFloat(state.filters.prices.max) &&
            parseFloat(p.price) > parseFloat(state.filters.prices.min)
        );
      if (
        (parseInt(state.filters.prices.min) === 0 ||
          parseInt(state.filters.prices.min) === "") &&
        (parseInt(state.filters.prices.max) === 0 ||
          parseInt(state.filters.prices.max) === "")
      )
        state.tempProducts = state.products;
      console.log(state.products);
    },
    startLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setProducts: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.products = action.payload.products;
      state.tempProducts = action.payload.products;
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

export const {
  startLoadingProducts,
  setProducts,
  filterPrice,
  filterProduct,
  setDetails,
  setStatus,
} = productSlice.actions;
