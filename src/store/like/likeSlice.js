import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";

export const likeApartmentAsync = createAsyncThunk(
  "like/likeApartment",
  async (apartmentId) => {
    await axios.post(`${ACCOUNT_API}/apartment/${apartmentId}/like/`);
  }
);

const likeSlice = createSlice({
  name: "like",
  initialState: {
    likes: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(likeApartmentAsync.fulfilled, (state, action) => {
      const apartmentId = action.meta.arg;
      state.likes[apartmentId] = (state.likes[apartmentId] || 0) + 1;
    });
  },
});

export default likeSlice.reducer;
