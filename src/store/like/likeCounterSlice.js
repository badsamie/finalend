// // likeCounterSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const likeCounterSlice = createSlice({
//   name: "likeCounterSlice",
//   initialState: {
//     likeCounts: {}, // Сохраняем счетчики лайков для каждого продукта
//   },
//   reducers: {
//     setLikeCount: (state, action) => {
//       const { productId, count } = action.payload;
//       state.likeCounts[productId] = count;
//     },
//     incrementLike: (state, action) => {
//       const productId = action.payload;
//       state.likeCounts[productId] = (state.likeCounts[productId] || 0) + 1;
//     },
//     decrementLike: (state, action) => {
//       const productId = action.payload;
//       state.likeCounts[productId] = Math.max(
//         (state.likeCounts[productId] || 0) - 1,
//         0
//       );
//     },
//   },
// });

// export const { setLikeCount, incrementLike, decrementLike } =
//   likeCounterSlice.actions;

// export default likeCounterSlice.reducer;

// likeCounterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadLikeCountsFromLocalStorage = () => {
  try {
    const storedLikeCounts = localStorage.getItem("likeCounts");
    return storedLikeCounts ? JSON.parse(storedLikeCounts) : {};
  } catch (error) {
    console.error("Error loading like counts from local storage:", error);
    return {};
  }
};

const saveLikeCountsToLocalStorage = (likeCounts) => {
  try {
    localStorage.setItem("likeCounts", JSON.stringify(likeCounts));
  } catch (error) {
    console.error("Error saving like counts to local storage:", error);
  }
};

const likeCounterSlice = createSlice({
  name: "likeCounterSlice",
  initialState: {
    likeCounts: loadLikeCountsFromLocalStorage(),
  },
  reducers: {
    setLikeCount: (state, action) => {
      const { productId, count } = action.payload;
      state.likeCounts[productId] = count;
      saveLikeCountsToLocalStorage(state.likeCounts); // Save to local storage
    },
    incrementLike: (state, action) => {
      const productId = action.payload;
      state.likeCounts[productId] = (state.likeCounts[productId] || 0) + 1;
      saveLikeCountsToLocalStorage(state.likeCounts); // Save to local storage
    },
    decrementLike: (state, action) => {
      const productId = action.payload;
      state.likeCounts[productId] = Math.max(
        (state.likeCounts[productId] || 0) - 1,
        0
      );
      saveLikeCountsToLocalStorage(state.likeCounts); // Save to local storage
    },
  },
});

export const { setLikeCount, incrementLike, decrementLike } =
  likeCounterSlice.actions;

export default likeCounterSlice.reducer;
