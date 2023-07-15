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
    isFormValid: false,
    invalidFields: [],
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
    setAddIngredients(state, action) {
      state.listItems = action.payload;
    },
    setPreparation(state, action) {
      state.preparation = action.payload;
    },
    setFormValidity(state, action) {
      state.isFormValid = action.payload;
    },
    validateForm(state) {
      const { title, about, category, time, listItems, preparation } = state;

      const invalidFields = [];

      if (title.trim() === "") {
        invalidFields.push("title");
      }
      if (about.trim() === "") {
        invalidFields.push("about");
      }
      if (category === "") {
        invalidFields.push("category");
      }
      if (time === "") {
        invalidFields.push("time");
      }
      if (listItems.length === 0) {
        invalidFields.push("listItems");
      }
      if (
        preparation.length === 0 ||
        (preparation.length === 1 && preparation[0].trim() === "")
      ) {
        invalidFields.push("preparation");
      }

      state.isFormValid = invalidFields.length === 0;
      state.invalidFields = invalidFields;
    },
    setInvalidFields(state, action) {
      state.invalidFields = action.payload;
    },
  },
});

export const {
  setDescription,
  setImage,
  setAddIngredients,
  setPreparation,
  setFormValidity,
  validateForm,
  setInvalidFields,
} = dataSlice.actions;

export default dataSlice.reducer;
