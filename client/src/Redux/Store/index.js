import { configureStore } from "@reduxjs/toolkit";
import { productSlice, themeSlice } from "../Slices";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    theme: themeSlice.reducer,
  },
});
