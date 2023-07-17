import { createSlice } from "@reduxjs/toolkit";
import { themeSwitcherInitialState } from "../../initialState/initialState";

const themeSwitcherSlice = createSlice({
   name: "themeSwitcher",
   initialState: themeSwitcherInitialState,

   reducers: {
      switcherTheme(state) {
         state.darkThem = !state.darkThem;
      },
   },
});

export const themeSwitcherReducer = themeSwitcherSlice.reducer;

export const { switcherTheme } = themeSwitcherSlice.actions;
