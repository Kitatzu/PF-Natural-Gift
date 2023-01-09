import { configureStore } from "@reduxjs/toolkit";
import {
  categoriesSlice,
  productSlice,
  themeSlice,
  userSlice,
} from "../Slices";
import { cartSlice } from "../Slices/Cart";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    theme: themeSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});
