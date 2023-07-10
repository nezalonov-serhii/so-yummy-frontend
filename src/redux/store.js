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
import addRecipeReducer from "./addRecipe/addRecipeSlice/addRecipeSlice";
import shoppingReducer from "./shopping/sliceShopping";

const authPersistConfig = {
   key: "auth",
   storage,
   whitelist: ["token"],
};

export const store = configureStore({
   reducer: {
      auth: persistReducer(authPersistConfig, signupReducer),
      addRecipe: addRecipeReducer,
      shopping: shoppingReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export const persistor = persistStore(store);
