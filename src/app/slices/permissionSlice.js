import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAllPermissions } from "../actions/permissionAction";

const initialState = {
  permission: null,
};

const permissionSlice = createSlice({
  name: "permission",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPermissions.fulfilled, (state, action) => {
      state.permission = action.payload;
    });
  },
});

export default permissionSlice.reducer;
