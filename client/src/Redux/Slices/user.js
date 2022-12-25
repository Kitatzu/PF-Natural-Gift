import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  isLog: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (store, action) => {
      if (!action.payload) {
        store.userName = null;
      } else {
        if (
          JSON.parse(localStorage.getItem("token")) !== null &&
          JSON.parse(localStorage.getItem("token")).userName === action.payload
        ) {
          store.userName = action.payload;
          console.log(store.userName);
        } else {
          store.userName = null;
        }
      }
    },
    setIsLog: (store, action) => {
      if (
        JSON.parse(localStorage.getItem("token")) !== null &&
        JSON.parse(localStorage.getItem("token")).token === action.payload
      ) {
        store.isLog = true;
      } else {
        store.isLog = false;
      }
    },
    logout: (store) => {
      store.isLog = false;
    },
  },
});

export const { setUserName, setIsLog, logout } = userSlice.actions;
