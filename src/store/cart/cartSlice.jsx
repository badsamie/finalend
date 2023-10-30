import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : { items: [] };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromStorage(),
  reducers: {
    toggleCart: (state, action) => {
      const itemId = action.payload?.id;

      if (itemId) {
        const existingItem = state.items?.find((item) => item.id === itemId);

        if (existingItem) {
          existingItem.quantity = action.payload.quantity;
        } else {
          state.items = state.items || [];
          state.items.push({ ...action.payload, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    removeAllFromCart: (state, action) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { toggleCart, removeAllFromCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
