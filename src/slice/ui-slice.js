import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: "home",
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    uiLoadingStart: (state) => {
      state.isLoading = true;
    },
    uiLoadingSuccess: (state, action) => {
      state.isLoading = false;
      state.active = action.payload;
    },
    uiLoadingFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { uiLoadingFailure, uiLoadingStart, uiLoadingSuccess } =
  uiSlice.actions;

export default uiSlice.reducer;
