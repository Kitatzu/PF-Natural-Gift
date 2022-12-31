import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  dark: {
    primary: "#272727",
    sidebar: "#565656",
    second: "#565656",
    buttonPrimary:
      "linear-gradient(135.13deg, #FFB929 10.46%, #FF7DC1 127.81%);",
    textPrimary: "#f2f2f2",
    textSecond: "#59A96A",
  },
  light: {
    primary: "#f2f2f2",
    sidebar: "#ffff",
    second: "linear-gradient(135.13deg, #FF7DC1 10.46%, #4244FF 127.81%);",
    buttonPrimary:
      "linear-gradient(135.13deg, #FFB929 10.46%, #FF7DC1 127.81%);",
    textPrimary: "#535353",
    textSecond: "#59A96A",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
