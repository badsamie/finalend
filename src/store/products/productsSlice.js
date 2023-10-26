import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getOneProduct, getProducts } from "./productsActions";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    oneProduct: null,
    currentPage: 1,
    totalPages: 1,
    currentCategory: "",
    search: "",
    category: [],
    image: [],
    sortByRating: "",
    priceRange: "",
  },
  reducers: {
    clearOneProductState: (state) => {
      state.oneProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getOneProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.oneProduct = action.payload;
      })
      .addCase(getOneProduct.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.category = action.payload;
      });
  },
});
export const { clearOneProductState } = productSlice.actions;
export default productSlice.reducer;
