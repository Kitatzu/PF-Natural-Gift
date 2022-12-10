import { createSlice } from "@reduxjs/toolkit";
import { productState } from "../../state/productState";

export const productSlice = createSlice({
  name: "PRODUCTS",
  initialState: productState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getProductInfo: (state, action) => {
      state.productInfo = action.payload;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getProducts, getProductInfo, setLoading } = productSlice.actions;
export default productSlice.reducer;
