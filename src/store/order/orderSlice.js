// orderSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Замените URL на ваш API
const apiUrl = "https://sss.samirkk.com/api/v1/order/";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData) => {
    const response = await axios.post(apiUrl, orderData);
    return response.data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
