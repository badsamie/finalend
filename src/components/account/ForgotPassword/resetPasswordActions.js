
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RESET_API } from '../../../helpers/consts'; 

export const resetPassword = createAsyncThunk(
  'resetPassword',
  async ({ code, new_password, new_password_confirm }) => {
    try {
      const response = await axios.post(`${RESET_API}/account/reset_password/`, {
        code,
        new_password,
        new_password_confirm,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
