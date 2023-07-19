import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipeById = createAsyncThunk(
   "recipes/fetchRecipeById",
   async (recipeId, thunkAPI) => {
      try {
         const response = await axios.get(`/api/recipes/${recipeId}`);
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   }
);

export const addToFavorite = createAsyncThunk("recipes/addFavorite", async (recipeId, thunkAPI) => {
   try {
      const response = await axios.post(`/api/favorite/${recipeId}`);
      return response.data.recipe;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const deleteFavorite = createAsyncThunk(
   "recipes/deleteFavorite",
   async (recipeId, thunkAPI) => {
      try {
         const response = await axios.delete(`/api/favorite/${recipeId}`);
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   }
);
