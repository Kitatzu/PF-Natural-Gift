import { configureStore } from "@reduxjs/toolkit";
import {
  categoriesSlice,
  productSlice,
  themeSlice,
  userSlice,
} from "../Slices";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    theme: themeSlice.reducer,
    user: userSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});
