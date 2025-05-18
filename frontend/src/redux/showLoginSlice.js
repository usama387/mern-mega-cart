import { createSlice } from "@reduxjs/toolkit";

const showLoginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    showUserLogin: false,
  },
  reducers: {
    setShowUserLogin: (state, action) => {
      state.showUserLogin = action.payload;
    },
  },
});

export const { setShowUserLogin } = showLoginSlice.actions;
export default showLoginSlice.reducer;
