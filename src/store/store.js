import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import accountSlice from "./account/accountSlice";
import cartReducer from "./cart/cartSlice";
export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    products: productsReducer,
    account: accountSlice,
    cart: cartReducer,
  },
});
