import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { deleteShoppingThunk, getShoppingThunk, addShoppingThunk } from "./thunkShopping";

const heandleFulfilledAdd = (state, { payload }) => {
   state.shopping.isLoading = false;
   state.shopping.items = [...payload];
   state.shopping.error = "";
};

const handlePending = (state) => {
   state.shopping.isLoading = true;
};
const handleRejected = (state, { payload }) => {
   state.shopping.isLoading = false;
   state.shopping.error = payload;
};

const handleFulfilledGet = (state, { payload }) => {
   state.shopping.isLoading = false;
   state.shopping.items = payload || state.shopping.items;
   state.shopping.error = "";
};
const handleFulfilledDel = (state, { payload }) => {
   state.shopping.isLoading = false;
   state.shopping.items = state.shopping.items.filter((el) => el.ingredientId !== payload);
   state.shopping.error = "";
};

export const shoppingSlice = createSlice({
   name: "shopping",
   initialState: {
      shopping: {
         items: [],
         isLoading: false,
         error: null,
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getShoppingThunk.fulfilled, handleFulfilledGet)
         .addCase(addShoppingThunk.fulfilled, heandleFulfilledAdd)
         .addCase(deleteShoppingThunk.fulfilled, handleFulfilledDel)

         .addMatcher(
            isAnyOf(
               addShoppingThunk.pending,
               getShoppingThunk.pending,
               deleteShoppingThunk.pending
            ),
            handlePending
         )
         .addMatcher(
            isAnyOf(
               addShoppingThunk.rejected,
               getShoppingThunk.rejected,
               deleteShoppingThunk.rejected
            ),
            handleRejected
         );
   },
});

export default shoppingSlice.reducer;
