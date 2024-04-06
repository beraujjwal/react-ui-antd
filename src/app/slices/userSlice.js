import { createAction, createSlice } from "@reduxjs/toolkit";
import { persistUser, readUser } from "../../services/localStorage.service";

const initialState = {
  user: readUser(),
};

export const setUser = createAction("user/setUser", (newUser) => {
  persistUser(newUser);

  return {
    payload: newUser,
  };
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
  },
});
export default userSlice.reducer;
