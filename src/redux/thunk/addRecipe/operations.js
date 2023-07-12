import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const fetchIngredients = createAsyncThunk(
   "addRecipe/fetchIngredients",
   async (_, thunkAPI) => {
      try {
         const response = await axios.get("/ingredients/list");
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const fetchCategories = createAsyncThunk(
   "addRecipe/fetchCategories",
   async (_, thunkAPI) => {
      try {
         const response = await axios.get("/recipes/category-list");
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const fetchRecipePopular = createAsyncThunk(
   "addRecipe/popular-recipe",
   async (_, thunkAPI) => {
      try {
         const response = await axios.get(`/popular-recipe`);
         return await response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(thunkAPI.serializeError(error));
      }
   },
   {
      serializeError: (error) => {
         const { message, name, stack, response: { status, statusText } = {} } = error;
         return { message, name, stack, status, statusText };
      },
   }
);

export const fetchAddRecipe = createAsyncThunk(
   "addRecipe/ownRecipes",
   async ({ name, number }, thunkAPI) => {
      try {
         const response = await axios.post(`/ownRecipes`, { name, number });
         toast.success("Add recipe");
         return await response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);