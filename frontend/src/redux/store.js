import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import showLoginSlice from "./showLoginSlice";
import searchQuerySlice from "./searchQuerySlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    cart: cartSlice,
    loginSlice: showLoginSlice,
    querySlice: searchQuerySlice,
  },
});

export default store;
