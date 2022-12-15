import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../Slices";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});
