import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FORGOT_API } from '../../../helpers/consts';

export const recoverPassword = createAsyncThunk(
  'recoverPassword',
  async (email) => {
    try {
      const response = await axios.post(`${FORGOT_API}/account/forgot_password/`, { email });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
