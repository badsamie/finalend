import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RESET_API } from '../../../helpers/consts';

export const resetPassword = createAsyncThunk(
  'passwordRecovery/resetPassword',
  async ({ code, new_password, new_password_confirm }) => {
    try {
      const response = await axios.post(`${RESET_API}/account/reset_password/`, { code, new_password, new_password_confirm });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const resetPasswordSlice = createSlice({
  name: 'passwordRecovery',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default resetPasswordSlice.reducer;
