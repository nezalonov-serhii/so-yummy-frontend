import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    image: null,
    title: "",
    about: "",
    category: "",
    time: "",
    listItems: [],
    preparation: [],
  },
  reducers: {
    setDescription(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    setIngredients(state, action) {
      state.listItems = action.payload;
    },
    setPreparation(state, action) {
      state.preparation = action.payload;
    },
  },
});

export const { setDescription, setImage, setIngredients, setPreparation } =
  dataSlice.actions;

export default dataSlice.reducer;
