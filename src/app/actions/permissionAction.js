import { createAsyncThunk } from "@reduxjs/toolkit";
import permissionService from "../services/permissionService";

export const getAllPermissions = createAsyncThunk(
  "permission/list",
  async (data, { rejectWithValue }) => {
    try {
      const res = await permissionService.getAllPermissions(data);
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
