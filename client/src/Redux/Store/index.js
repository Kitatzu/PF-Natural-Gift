import { configureStore } from "@reduxjs/toolkit";
import { productSlice, themeSlice, userSlice } from "../Slices";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    theme: themeSlice.reducer,
    user: userSlice.reducer,
  },
});
