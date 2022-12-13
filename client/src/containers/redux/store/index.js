import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "../slices/Errors";
import productSlice from "../slices/products";

export const store = configureStore({
  reducer: {
    products: productSlice,
    errors: errorSlice,
  },
});
