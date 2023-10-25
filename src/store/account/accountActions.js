import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";

export const registerAccount = createAsyncThunk(
  "account/registerAccount",
  async ({user, navigate})=>{
      const userData = new FormData()
      userData.append("email", user.email)
      userData.append("password", user.password)
      userData.append("password2", user.password2)
      const res = await axios.post(`${ACCOUNT_API}/account/register/`, userData)
        console.log(res);
        return {navigate}
  }
)

export const loginAccount = createAsyncThunk(
  'account/loginAccount',
  async ({ user, navigate }) => {
      const accountData = new FormData();
      accountData.append('email', user.email);
      accountData.append('password', user.password);
      accountData.append('password2', user.password2);
      const { data } = await axios.post(`${ACCOUNT_API}/account/login/`, accountData);
      return { data, navigate, user: user.email };
  }
);