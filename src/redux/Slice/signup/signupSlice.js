import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { signupInitialState } from "../../initialState/initialState";

import { currentUserThunk, loginThunk, logoutThunk, signupThunk } from "../../thunk/auth/authThunk";

const handlePending = (state) => {
   state.isAuthLoading = true;
   state.error = "";
};

const handleRejected = (state, { error }) => {
   state.isAuthLoading = false;
   state.error = error;
};

const handleFulfilled = (state, { payload }) => {
   state.isLoggedIn = true;
   state.isAuthLoading = false;
   state.error = "";
   state.token = payload.token;
   state.user = payload.user;
};

const handleLogout = (state) => {
   state.user = { name: null, email: null };
   state.token = null;
   state.isLoggedIn = false;
   state.isAuthLoading = false;
   state.isRefreshing = false;
   state.error = "";
};

const signupSlice = createSlice({
   name: "auth",
   initialState: signupInitialState,

   reducers: {
      logout(state) {
         handleLogout(state);
      },
      updateName(state, action) {
         state.user.name = action.payload;
      },
      updateAvatarURL(state, action) {
         state.user.avatarURL = action.payload;
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
            state.error = null;
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.isAuthLoading = false;
         })
         .addCase(logoutThunk.rejected, handleLogout)
         .addMatcher(isAnyOf(logoutThunk.fulfilled, currentUserThunk.rejected), handleLogout)
         .addMatcher(
            isAnyOf(
               signupThunk.pending,
               loginThunk.pending,
               logoutThunk.pending,
               currentUserThunk.pending
            ),
            handlePending
         )
         .addMatcher(isAnyOf(loginThunk.fulfilled, signupThunk.fulfilled), handleFulfilled)
         .addMatcher(isAnyOf(signupThunk.rejected, loginThunk.rejected), handleRejected);
   },
});

export const { updateName, updateAvatarURL } = signupSlice.actions;
export const signupReducer = signupSlice.reducer;
