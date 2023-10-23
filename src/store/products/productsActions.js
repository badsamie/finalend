import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_API } from "../../helpers/consts";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await axios.get(`${PRODUCTS_API}`);
    return data;
  }
);
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async ({ product }, { dispatch }) => {
    await axios.post(PRODUCTS_API, product);
    dispatch(getProducts());
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async ({ id }, { dispatch }) => {
    await axios.delete(`${PRODUCTS_API}/${id}`);
    dispatch(getProducts());
  }
);
