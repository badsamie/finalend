// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: JSON.parse(localStorage.getItem("cart")) || [],
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;

// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [], // Use localStorage for initialization
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state)); // Save to localStorage after each change
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
