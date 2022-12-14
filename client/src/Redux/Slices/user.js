import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  linkName: null,
  avatar: null,
  email: null,
  firstName: null,
  lastName: null,
  isLog: false,
  isLoading: false,
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
    setIsLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    setData: (store, action) => {
      store.avatar = action.payload.avatar;
      store.firstName = action.payload.firstName;
      store.lastName = action.payload.lastName;
      store.email = action.payload.email;
      store.linkName = action.payload.userName;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
  },
});

export const { setUserName, setIsLog, logout, setIsLoading, setData } =
  userSlice.actions;
