export const selectRecipe = (state) => state.recipes.recipeById;

export const selectFavoritRecipe = (state) => state.recipes.favoritsRecipe;

export const selectShoppingList = (state) => state.shopping.shopping.items;

export const selectIngredientsId = (state) => state.recipes.ingredientsList;
