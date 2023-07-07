import { createSlice } from "@reduxjs/toolkit";
import { signupInitialState } from "../../initialState/initialState";

const signupSlice = createSlice({
   name: "signup",
   initialState: signupInitialState,
});

export const signupReducer = signupSlice.reducer;
