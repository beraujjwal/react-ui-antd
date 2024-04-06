import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  readToken,
  deleteUser,
  deleteAccessToken,
  deleteRefreshToken,
  deleteTokenExpires,
} from "../../services/localStorage.service";

import {
  registerUser,
  verifyAccount,
  loginUser,
  forgotPassword,
  resetPassword,
  userRefreshToken,
} from "../actions/userAction";

import { setUser } from "./userSlice";
import { setDeviceInfo } from "./deviceSlice";

const initialState = {
  token: readToken(),
};

export const doLogout = createAsyncThunk(
  "auth/doLogout",
  (payload, { dispatch }) => {
    deleteAccessToken();
    deleteRefreshToken();
    deleteTokenExpires();
    deleteUser();
    dispatch(setUser(null));
    dispatch(setDeviceInfo(null));
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(verifyAccount.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
    });

    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(doLogout.fulfilled, (state, action) => {
      state.token = null;
    });

    builder.addCase(userRefreshToken.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default authSlice.reducer;
