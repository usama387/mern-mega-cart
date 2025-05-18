// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      // Ensure we clone the object to trigger state change
      state.items = {
        ...state.items,
        [itemId]: (state.items[itemId] || 0) + 1,
      };
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const newItems = { ...state.items };
      if (newItems[itemId]) {
        newItems[itemId] -= 1;
        if (newItems[itemId] === 0) {
          delete newItems[itemId];
        }
      }
      state.items = newItems;
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
