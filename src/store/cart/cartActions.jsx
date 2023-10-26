import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";
import { addToCart } from "./cartSlice";

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (productId, { dispatch }) => {
    try {
      await axios.post(`${ACCOUNT_API}/giftcard`, { productId });
      dispatch(addToCart(productId));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }
);
