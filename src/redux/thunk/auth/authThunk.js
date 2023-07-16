import { createAsyncThunk } from "@reduxjs/toolkit";

import {
   currentUser,
   login,
   logout,
   signup,
} from "../../../service/api/apiAuth";

export const signupThunk = createAsyncThunk("user/signup", (user) =>
   signup(user)
);

export const loginThunk = createAsyncThunk("user/login", (user) => login(user));

export const logoutThunk = createAsyncThunk("user/logout", () => logout());

export const currentUserThunk = createAsyncThunk(
   "user/currentUser",
   async (token) => currentUser(token)
);


// export const updateUserNameThunk = createAsyncThunk(
//    'user/updateUserName',
//    async ({ token, name }) => {
//      try {
//        const response = await updateUserName(token, name);
//        return response;
//      } catch (error) {
//        throw new Error(error.message);
//      }
//    }
//  );