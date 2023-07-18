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
      invalidFields: {},
      isClickDisabledButton: false,
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

         const invalidFields = {};

         if (title.trim() === "") {
            invalidFields.title = true;
         }
         if (about.trim() === "") {
            invalidFields.about = true;
         }
         if (category === "") {
            invalidFields.category = true;
         }
         if (time === "") {
            invalidFields.time = true;
         }
         if (listItems.length === 0 || listItems.every((item) => item.selectedOption === null)) {
            invalidFields.listItems = true;
         }

         if (
            preparation.length === 0 ||
            (preparation.length === 1 && preparation[0].trim() === "")
         ) {
            invalidFields.preparation = true;
         }

         state.isFormValid = Object.keys(invalidFields).length === 0;
         state.invalidFields = invalidFields;
      },
      setInvalidFields(state, action) {
         state.invalidFields = action.payload;
      },
      setIsClickDisabledButton(state, action) {
         state.isClickDisabledButton = action.payload;
      },
      clearForm(state) {
         return {
            ...state,
            image: null,
            title: "",
            about: "",
            category: "",
            time: "",
            listItems: [],
            preparation: [],
            isFormValid: false,
            invalidFields: [],
            isClickDisabledButton: false,
         };
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
   setIsClickDisabledButton,
   clearForm,
} = dataSlice.actions;

export default dataSlice.reducer;
