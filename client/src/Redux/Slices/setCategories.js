import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: null,
  error: null,
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    startLoadingCategories: (state) => {
      state.isLoading = true;
    },
    setCategories: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload.categories;
      state.status = action.payload.status;
    },

    setStatus: (state, action) => {
      state.status = action.payload.status;
      state.error = action.payload.msg;
    },
  },
});

export const { startLoadingCategories, setCategories, setStatus } =
  categoriesSlice.actions;
