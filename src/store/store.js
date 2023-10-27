import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import accountSlice from "./account/accountSlice";
import cartReducer from "./cart/cartSlice";
import apartmentReducer from "./like/likeSlice";
import likeReducer from "./like/likeSlice";
export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    products: productsReducer,
    account: accountSlice,
    cart: cartReducer,
    apartment: apartmentReducer,
    like: likeReducer,
  },
});
