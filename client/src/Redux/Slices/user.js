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
          JSON.parse(localStorage.getItem(action.payload)) !== undefined &&
          JSON.parse(localStorage.getItem(action.payload)).userName ===
            action.payload
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
        JSON.parse(localStorage.getItem(store.userName)).token ===
        action.payload
      ) {
        store.isLog = true;
        console.log(store.isLog);
      }
    },
  },
});

export const { setUserName, setIsLog } = userSlice.actions;
