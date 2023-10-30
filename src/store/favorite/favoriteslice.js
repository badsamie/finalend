import { createSlice } from "@reduxjs/toolkit";

const loadFavFromStorage = () => {
  const favData = localStorage.getItem("fav");
  return favData ? JSON.parse(favData) : { items: [] };
};

export const cartSlice = createSlice({
  name: "fav",
  initialState: loadFavFromStorage(),
  reducers: {
    toggleFav: (state, action) => {
      const itemId = action.payload?.id;

      if (itemId) {
        const existingItem = state.items?.find((item) => item.id === itemId);

        if (existingItem) {
          state.items = state.items.filter((item) => item.id !== itemId);
        } else {
          state.items = state.items || [];
          state.items.push({ ...action.payload, quantity: 1 });
        }

        localStorage.setItem("fav", JSON.stringify(state));
      }
    },
    removeAllFromFav: (state, action) => {
      state.items = [];
      localStorage.setItem("fav", JSON.stringify(state));
    },
    removeFromFav: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      localStorage.setItem("fav", JSON.stringify(state));
    },
  },
});

export const { toggleFav, removeAllFromFav, removeFromFav } = cartSlice.actions;

export default cartSlice.reducer;
