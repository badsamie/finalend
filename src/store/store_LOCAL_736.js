import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import orderReducer from "./order/orderSlice";
export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    products: productsReducer,
    order: orderReducer,
  },
});
