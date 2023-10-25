import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_API } from "../../helpers/consts";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await axios.get(`${PRODUCTS_API}/api/v1/apartment/`);
    return data.results;
  }
);
export const createProduct = createAsyncThunk(
  "products/createProduct",

  async ({ product }, { dispatch }) => {
    const productData = new FormData();
    productData.append("title", product.title);
    productData.append("location", product.location);
    productData.append("price", product.price);
    productData.append("education", product.education);
    productData.append("description", product.description);
    productData.append("price_dollar", product.price_dollar);
    productData.append("category", product.category);
    productData.append("count_views", product.count_views);

    await axios.post(`${PRODUCTS_API}/api/v1/apartment/`, productData);
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
