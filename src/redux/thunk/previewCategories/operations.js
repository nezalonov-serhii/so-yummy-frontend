import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPreviewCategories = createAsyncThunk(
   "recipes/fetchMainPageRecipes",
   async (_, thunkAPI) => {
      try {
         const response = await axios.get("/api/recipes/main-page");

         return response.data.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);
