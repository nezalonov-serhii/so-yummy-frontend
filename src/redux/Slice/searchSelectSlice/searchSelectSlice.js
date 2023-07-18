import { createSlice } from "@reduxjs/toolkit";
import { searchSelectInitialState } from "../../initialState/initialState";

const searchSelectSlice = createSlice({
   name: "searchSelect",
   initialState: searchSelectInitialState,
   reducers: {
      setSearch: (state, action) => {
         state.search = action.payload;
      },
   },
});

export const { setSearch } = searchSelectSlice.actions;

export default searchSelectSlice.reducer;
