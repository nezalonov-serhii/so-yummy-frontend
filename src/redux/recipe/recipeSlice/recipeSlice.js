import { createSlice } from "@reduxjs/toolkit";

import { fetchRecipeById, addToFavorite, deleteFavorite } from "../recipeOperation/recipeOperation";

const initialState = {
   recipeById: {},
   ingredientsList: [],
   isLoading: false,
   error: null,
};

const handlePending = (state) => {
   state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
   state.isLoading = false;
   state.error = payload;
};

const recipesSlice = createSlice({
   name: "recipes",
   initialState,

   extraReducers: (builder) => {
      builder
         .addCase(fetchRecipeById.pending, handlePending)
         .addCase(fetchRecipeById.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.recipeById = payload.data;
         })
         .addCase(fetchRecipeById.rejected, handleRejected)

         .addCase(addToFavorite.pending, handlePending)
         .addCase(addToFavorite.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.recipeById.favorites = payload.favorites;
         })
         .addCase(addToFavorite.rejected, handleRejected)

         .addCase(deleteFavorite.pending, handlePending)
         .addCase(deleteFavorite.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
            state.recipeById.favorites = [];
         })
         .addCase(deleteFavorite.rejected, handleRejected);
   },
});

const recipesReducer = recipesSlice.reducer;
export default recipesReducer;
