import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FORGOT_API } from '../../../helpers/consts';

export const recoverPassword = createAsyncThunk(
  'passwordRecovery/recoverPassword',
  async (email) => {
    try {
      const response = await axios.post(`${FORGOT_API}/account/forgot_password/`, { email });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const passwordRecoverySlice = createSlice({
  name: 'passwordRecovery',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recoverPassword.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(recoverPassword.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(recoverPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default passwordRecoverySlice.reducer;
