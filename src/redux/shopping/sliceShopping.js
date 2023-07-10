import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
    deleteIngridientsThunk,
    getIngridientsThunk,
  } from './thunkShopping';


const handlePending = state => {
    state.ingridients.isLoading = true;
};
const handleRejected = (state, { payload }) => {
    state.ingridients.isLoading = false;
    state.ingridients.error = payload;
};

const handleFulfilledGet = (state, { payload }) => {
    state.ingridients.isLoading = false;
    state.ingridients.items = payload;
    state.ingridients.error = '';
};
const handleFulfilledDel = (state, { payload }) => {
    state.ingridients.isLoading = false;
    state.ingridients.items = state.ingridients.items.filter(el => el.id !== payload);
    state.ingridients.error = '';
  };


export const shoppingSlice = createSlice({
    name:'shopping',
    initialState:{
        shopping:{
            items:[],
            isLoading:false,
            error:null,
        }
    },
    extraReducers: builder =>{
        builder
            .addCase(getIngridientsThunk.fulfilled, handleFulfilledGet)

            .addCase(deleteIngridientsThunk.fulfilled, handleFulfilledDel)

            .addMatcher(
                isAnyOf(
                    getIngridientsThunk.pending,
                    deleteIngridientsThunk.pending
                ),
                handlePending
            )
            .addMatcher(
                isAnyOf(
                    getIngridientsThunk.rejected,
                    deleteIngridientsThunk.rejected
                ),
                handleRejected
            )            

    }

})

export default shoppingSlice.reducer