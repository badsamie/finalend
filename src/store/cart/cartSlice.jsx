import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ORDERS_API = "your_orders_api_endpoint"; // Замените на реальный API endpoint

const loadCartFromStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : { items: [] };
};

export const createOrder = createAsyncThunk("cart/createOrder", async () => {
  const cart = loadCartFromStorage();
  if (!cart.items.length) return;
  await axios.post(ORDERS_API, cart);
  localStorage.removeItem("cart");
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromStorage(),
  reducers: {
    toggleCart: (state, action) => {
      const itemId = action.payload?.id;

      if (itemId) {
        const existingItem = state.items?.find((item) => item.id === itemId);

        if (existingItem) {
          state.items = state.items.filter((item) => item.id !== itemId);
        } else {
          state.items = state.items || [];
          state.items.push({ ...action.payload, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    removeAllFromCart: (state, action) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { toggleCart, removeAllFromCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
