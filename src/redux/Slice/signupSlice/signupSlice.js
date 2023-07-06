import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
   name: "signup",
   initialState: "",
});

export const signupReducer = signupSlice.reducer;
