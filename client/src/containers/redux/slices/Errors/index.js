import { createSlice } from "@reduxjs/toolkit";
import { errorState } from "../../state/errorState";

export const errorSlice = createSlice({
  name: "ERRORS",
  initialState: errorState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload.error;
      state.type = action.payload.type;
      state.msg = action.payload.msg;
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
