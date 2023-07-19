import { createSlice } from "@reduxjs/toolkit";
import {
   fetchAddRecipe,
   fetchCategories,
   fetchIngredients,
} from "../../thunk/addRecipe/operations";

const handlePending = (state, field) => {
   state[field].isLoading = true;
   state[field].error = null;
};

const handleRejected = (state, action, field) => {
   state[field].isLoading = false;

   const { message, status, data } = action.payload;
   state[field].error = { message, status, data };
};

const handleFulfilled = (state, action, field) => {

   state[field].isLoading = false;
   state[field].error = null;
   if (action.payload) {
      state[field].items = action.payload.data;
   }
};

const addRecipeSlice = createSlice({
   name: "addRecipe",
   initialState: {
      recipe: {
         isLoading: false,
         error: null,
      },
      ingredients: {
         items: [],
         isLoading: false,
         error: null,
      },
      categories: {
         items: [],
         isLoading: false,
         error: null,
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(fetchAddRecipe.pending, (state) => handlePending(state, "recipe"))
         .addCase(fetchAddRecipe.rejected, (state, action) =>
            handleRejected(state, action, "recipe")
         )
         .addCase(fetchAddRecipe.fulfilled, (state, action) =>
            handleFulfilled(state, action, "recipe")
         )
         .addCase(fetchIngredients.pending, (state) => handlePending(state, "ingredients"))
         .addCase(fetchIngredients.fulfilled, (state, action) =>
            handleFulfilled(state, action, "ingredients")
         )
         .addCase(fetchIngredients.rejected, (state, action) =>
            handleRejected(state, action, "ingredients")
         )
         .addCase(fetchCategories.pending, (state) => handlePending(state, "categories"))
         .addCase(fetchCategories.fulfilled, (state, action) =>
            handleFulfilled(state, action, "categories")
         )
         .addCase(fetchCategories.rejected, (state, action) =>
            handleRejected(state, action, "categories")
         );
   },
});
export const { setIngredients } = addRecipeSlice.actions;
export default addRecipeSlice.reducer;
