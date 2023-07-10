import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https://so-yummy-426w.onrender.com';

export const deleteIngridientsThunk = createAsyncThunk(
    'shopping/delete',
    async id => {
      try {
        const { data } = await axios.delete(`/shopping-list/${id}`);
        return data;
      } catch (er) {
        console.log('🚀 ~ Error:', er.message);
      }
    }
  );

  export const getIngridientsThunk = createAsyncThunk('shopping/get', async () => {
    try {
      const { data } = await axios.get('/shopping-list');
      return data;
    } catch {
      console.log('🚀 ~ Error:');
    }
  });