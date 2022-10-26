import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  onboardLed: boolean;
};

const initialState: InitialState = {
  onboardLed: false,
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setOnboardLed: (state, action: PayloadAction<string>) => {
      state.onboardLed = action.payload === "0" ? false : true;
    },
  },
});

export const deviceReducer = deviceSlice.reducer;
export const { setOnboardLed } = deviceSlice.actions;
