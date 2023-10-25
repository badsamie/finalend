import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsActions";

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
    categories: [],
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
      });
  },
});
export const { clearOneProductState } = productSlice.actions;
export default productSlice.reducer;
