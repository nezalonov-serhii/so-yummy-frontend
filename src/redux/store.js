import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";

import { signupReducer } from "./Slice/signup/signupSlice";
import addRecipeReducer from "./Slice/addRecipeSlice/addRecipeSlice";
import shoppingReducer from "./shopping/sliceShopping";
import dataReducer from "./Slice/addRecipeSlice/addRecipeFormSlice";
import recipesReducer from "./recipe/recipeSlice/recipeSlice";
import searchSelectReducer from "./Slice/searchSelectSlice/searchSelectSlice";
import { themeSwitcherReducer } from "./Slice/themeSwitcherSlice/themeSwitcherSlice";

const authPersistConfig = {
   key: "auth",
   storage,
   whitelist: ["token"],
};

const switcherThemePersistConfig = {
   key: "switcherTheme",
   storage,
};

export const store = configureStore({
   reducer: {
      auth: persistReducer(authPersistConfig, signupReducer),
      addRecipe: addRecipeReducer,
      shopping: shoppingReducer,
      data: dataReducer,
      recipes: recipesReducer,
      searchSelect: searchSelectReducer,
      switcherTheme: persistReducer(switcherThemePersistConfig, themeSwitcherReducer),
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export const persistor = persistStore(store);
