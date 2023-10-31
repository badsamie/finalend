
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import accountSlice from "./account/accountSlice";
import cartReducer from "./cart/cartSlice";
import passwordRecoverySlice from "../components/account/ForgotPassword/passwordRecoverySlice";
import resetPasswordSlice from "../components/account/ForgotPassword/resetPasswordSlice";

import favoriteReducer from "./favorite/favoriteslice";
export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    products: productsReducer,
    account: accountSlice,
    cart: cartReducer,
    resetPassword: resetPasswordSlice,
    passwordRecovery: passwordRecoverySlice
    fav: favoriteReducer,
  },
});
