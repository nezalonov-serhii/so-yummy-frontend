import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const deleteShoppingThunk = createAsyncThunk("shopping/delete", async (id) => {
   try {
      const { data } = await axios.delete(`/api/shopping-list/${id}`);
      return id;
   } catch (er) {
      console.log("🚀 ~ Error:", er.message);
   }
});

export const getShoppingThunk = createAsyncThunk("shopping/get", async () => {
   try {
      const { data } = await axios.get("/api/shopping-list");
      return data.data;
   } catch {
      console.log("🚀 ~ Error:");
   }
});

export const addShoppingThunk = createAsyncThunk("contacts/post", async (credentials) => {
   try {
      const { data } = await axios.post("/api/shopping-list", credentials);
      return data.data;
   } catch (er) {
      console.log("🚀 ~ Error:", er.message);
   }
});
