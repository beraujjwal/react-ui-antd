import { createAction, createSlice } from "@reduxjs/toolkit";
import {
  setDeviceDetails,
  readDeviceDetails,
} from "../../services/localStorage.service";

const initialState = {
  device: readDeviceDetails(),
};

export const setDeviceInfo = createAction(
  "device/setDeviceInfo",
  (deviceInfo) => {
    setDeviceDetails(deviceInfo);

    return {
      payload: deviceInfo,
    };
  }
);

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setDeviceInfo, (state, action) => {
      state.device = action.payload;
    });
  },
});
export default deviceSlice.reducer;
