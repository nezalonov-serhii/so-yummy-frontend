import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
    deleteIngridientsThunk,
    getIngridientsThunk,
  } from './thunkShopping';

export const shoppingSlice = createSlice({
    name:'shopping',
    initialState:{
        ingridients:{
            items:[],
            isLoading:false,
            error:null,
        }
    },
    extraReducers: builder =>{
        builder
            .addCase(getIngridientsThunk.fulfilled, {})

            .addCase(deleteIngridientsThunk.fulfilled, {})

            .addMatcher(
                isAnyOf(
                    getIngridientsThunk.pending,
                    deleteIngridientsThunk.pending
                ),{}
            )
            .addMatcher(
                isAnyOf(
                    getIngridientsThunk.rejected,
                    deleteIngridientsThunk.rejected
                ),{}
            )            

    }

})