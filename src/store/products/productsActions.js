import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_API } from "../../helpers/consts";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { getState }) => {
    const { currentPage, currentCategory, search, sortByRating, priceRange } =
      getState().products;
    const pagePag = `?page=${currentPage}`;
    const searchP = `?search=${search}`;
    const { data } = await axios.get(
      `${PRODUCTS_API}/api/v1/apartment/${pagePag}&${searchP}`
    );
    return data.results;
  }
);

export const getTotalPages = createAsyncThunk(
  "products/getTotalPages",
  async () => {
    let products = null;
    let totalPages = 1;
    do {
      let { data } = await axios.get(
        `${PRODUCTS_API}/api/v1/apartment/?page=${totalPages}`
      );
      products = data.result;
      totalPages++;
    } while (products);

    return totalPages;
  }
);

export const getOneProduct = createAsyncThunk(
  "products/getOneProduct",
  async ({ id }) => {
    const { data } = await axios.get(`${PRODUCTS_API}/api/v1/apartment/${id}/`);
    return data;
  }
);
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async ({ product }) => {
    try {
      const productData = new FormData();
      productData.append("title", product.title);
      productData.append("location", product.location);
      productData.append("price", product.price);
      productData.append("price_dollar", product.price_dollar);
      productData.append("education", product.education);
      productData.append("description", product.description);
      productData.append("category", product.category);
      productData.append("count_views", product.count_views);
      await axios.post(`${PRODUCTS_API}/api/v1/apartment/`, productData);
    } catch (err) {
      console.log(err);
    }
  }
);
export const createImage = createAsyncThunk(
  "products/createImage",
  async ({ product }, { dispatch }) => {
    try {
      const imgData = new FormData();
      imgData.append("post", product.id);
      console.log(product.image);
      imgData.append("image", product.image);
      //
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      await axios.post(
        `${PRODUCTS_API}/api/v1/apartment/image/`,
        imgData,
        config
      );
      dispatch(getProducts());
    } catch (error) {
      console.log(error, "soska");
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async ({ id }, { dispatch }) => {
    await axios.delete(`${PRODUCTS_API}/api/v1/apartment/${id}/`);
    dispatch(getProducts());
  }
);
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ product }, { dispatch }) => {
    await axios.patch(
      `${PRODUCTS_API}/api/v1/apartment/${product.id}/`,
      product
    );
    dispatch(getProducts());
  }
);

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async () => {
    const data = await axios.get(`${PRODUCTS_API}/api/v1/apartment/category/`);
    const uniqCategories = new Set(data.data.map((product) => product.name));
    const category = [];
    for (let i of uniqCategories) {
      category.push(i);
    }
    return category;
  }
);
