import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    products: productsReducer,
  },
});
