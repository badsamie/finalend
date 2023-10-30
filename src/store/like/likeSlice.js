// // import { createSlice } from "@reduxjs/toolkit";

// // const likeSlice = createSlice({
// //   name: "likeSlice",
// //   initialState: {
// //     likedProducts: [],
// //   },
// //   reducers: {
// //     toggleLike: (state, action) => {
// //       const productId = action.payload;

// //       const index = state.likedProducts.indexOf(productId);

// //       if (index === -1) {
// //         state.likedProducts.push(productId);
// //       } else {
// //         state.likedProducts.splice(index, 1);
// //       }
// //     },
// //   },
// // });

// // export const { toggleLike } = likeSlice.actions;
// // export default likeSlice.reducer;

// // likeSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialLikedProducts =
//   JSON.parse(localStorage.getItem("likedProducts")) || [];

// const likeSlice = createSlice({
//   name: "likeSlice",
//   initialState: {
//     likedProducts: initialLikedProducts,
//   },
//   reducers: {
//     toggleLike: (state, action) => {
//       const productId = action.payload;

//       const index = state.likedProducts.indexOf(productId);

//       if (index === -1) {
//         state.likedProducts.push(productId);
//       } else {
//         state.likedProducts.splice(index, 1);
//       }

//       localStorage.setItem(
//         "likedProducts",
//         JSON.stringify(state.likedProducts)
//       );
//     },
//   },
// });

// export const { toggleLike } = likeSlice.actions;
// export default likeSlice.reducer;

// likeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialLikedProducts =
  JSON.parse(localStorage.getItem("likedProducts")) || [];

const likeSlice = createSlice({
  name: "likeSlice",
  initialState: {
    likedProducts: initialLikedProducts,
  },
  reducers: {
    toggleLike: (state, action) => {
      const productId = action.payload;

      const index = state.likedProducts.indexOf(productId);

      if (index === -1) {
        state.likedProducts.push(productId);
      } else {
        state.likedProducts.splice(index, 1);
      }

      // Обновление локального хранилища после каждого изменения
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(state.likedProducts)
      );
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
