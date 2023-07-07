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

const persistConfig = {
   key: "root",
   storage,
};

const persistedReducer = persistReducer(persistConfig, signupReducer);

export const store = configureStore({
   reducer: {
      signup: persistedReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export const persistor = persistStore(store);
