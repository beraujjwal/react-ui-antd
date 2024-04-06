import { createAction, createSlice } from "@reduxjs/toolkit";

const DEFAULT_NIGHT_MODE_INTERVAL = [20 * 3600 * 1000, 8 * 3600 * 1000];

const currentNightTimeJSON = localStorage.getItem("nightTime");
const currentNightTime = currentNightTimeJSON
  ? JSON.parse(currentNightTimeJSON)
  : DEFAULT_NIGHT_MODE_INTERVAL;

const isNightMode = localStorage.getItem("nightMode") === "true";

localStorage.setItem("nightTime", JSON.stringify(currentNightTime));
localStorage.setItem("nightMode", JSON.stringify(isNightMode));

const initialState = {
  isNightMode,
  nightTime: currentNightTime,
};

export const setNightMode = createAction(
  "nightMode/setNightMode",
  (isNightMode) => {
    localStorage.setItem("nightMode", JSON.stringify(isNightMode));

    return {
      payload: isNightMode,
    };
  }
);

export const setNightTime = createAction(
  "nightMode/setNightTime",
  (nightTime) => {
    localStorage.setItem("nightTime", JSON.stringify(nightTime));

    return {
      payload: nightTime,
    };
  }
);

export const nightModeSlice = createSlice({
  name: "nightMode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setNightMode, (state, action) => {
      state.isNightMode = action.payload;
    });
    builder.addCase(setNightTime, (state, action) => {
      state.nightTime = action.payload;
    });
  },
});

export default nightModeSlice.reducer;
