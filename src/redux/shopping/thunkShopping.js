import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https://so-yummy-426w.onrender.com';

export const deleteShoppingThunk = createAsyncThunk(
    'shopping/delete',
    async id => {
      try {
        const { data } = await axios.delete(`/shopping-list/${id}`);
        console.log("data, успіх", data)
        return data;
      } catch (er) {
        console.log('🚀 ~ Error:', er.message);
      }
    }
  );

  export const getShoppingThunk = createAsyncThunk('shopping/get', 
  async () => {
    try {
      const { data } = await axios.get('/shopping-list');
      console.log("data, успіх", data)
      return data;
    } catch {
      console.log('🚀 ~ Error:');
    }
  });