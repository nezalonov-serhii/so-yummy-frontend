import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { setDescription, validateForm } from "../redux/Slice/addRecipeSlice/addRecipeFormSlice";
import { fetchCategories } from "../redux/thunk/addRecipe/operations";

import { ImageRecipe } from "./AddRecipe/AddRecipeForm/ImageRecipe/ImageRecipe";

import {
   Container,
   Input,
   InputWrapper,
   ErrorMessage,
} from "./AddRecipeForm/RecipeDescriptionFields/RecipeDescriptionFields.styled";

export const RecipeDescriptionFields = () => {
   const dispatch = useDispatch();
   const { title, about, category, time, invalidFields, isClickDisabledButton } = useSelector(
      (state) => state.data
   );
   const categories = useSelector((state) => state.addRecipe.categories.items);

   useEffect(() => {
      dispatch(fetchCategories());
   }, [dispatch]);

   const handleChange = (event) => {
      const { name, value } = event.currentTarget;
      dispatch(setDescription({ [name]: value }));
      dispatch(validateForm());
   };

   const handleSelectChange = (selectedOption, action) => {
      if (action.name === "category") {
         dispatch(setDescription({ category: selectedOption.value }));
      } else if (action.name === "time") {
         dispatch(setDescription({ time: selectedOption.value }));
      }
      dispatch(validateForm());
   };

   const customStyles = {
      control: (baseStyles, state) => ({
         width: 160,
         backgroundColor: "transparent",
         border: "none",
         cursor: "pointer",
         display: "flex",
      }),
      menuList: (provided, state) => ({
         ...provided,
         maxHeight: "210px",
         backgroundColor: "transparent",
      }),
      option: (provided, state) => ({
         ...provided,
         backgroundColor: "transparent",
         color: "black",
      }),
      valueContainer: (provided, state) => ({
         ...provided,
         justifyContent: "flex-end",
      }),
      dropdownIndicator: (provided, state) => ({
         ...provided,
         color: "var(--accent-color)",
      }),
   };

   return (
      <div>
         <ImageRecipe />
         <Container>
            <InputWrapper>
               <Input
                  placeholder="Enter item title"
                  type="text"
                  name="title"
                  value={title}
                  min={3}
                  onChange={handleChange}
                  title="Title may contain min 3 letters"
                  required
                  hasError={isClickDisabledButton && invalidFields.title}
               />
               {isClickDisabledButton && invalidFields.title && (
                  <ErrorMessage>Please enter title</ErrorMessage>
               )}
            </InputWrapper>
            <InputWrapper>
               <Input
                  placeholder="Enter about recipe"
                  type="text"
                  name="about"
                  value={about}
                  min={5}
                  onChange={handleChange}
                  title="Text may contain min 5 letters"
                  required
                  hasError={isClickDisabledButton && invalidFields.about}
               />
               {isClickDisabledButton && invalidFields.about && (
                  <ErrorMessage>Please enter description</ErrorMessage>
               )}
            </InputWrapper>
            <InputWrapper>
               <Input placeholder="Category" readOnly />

               <Select
                  styles={customStyles}
                  name="category"
                  value={{ value: category, label: category }}
                  options={categories.map((category) => ({
                     value: category,
                     label: category,
                  }))}
                  onChange={handleSelectChange}
                  isClearable={false}
                  isSearchable
                  components={{ IndicatorSeparator: () => null }}
                  placeholder={null}
                  hasError={isClickDisabledButton && invalidFields.category}
               />
               {isClickDisabledButton && invalidFields.category && (
                  <ErrorMessage>Please select a category</ErrorMessage>
               )}
            </InputWrapper>
            <InputWrapper>
               <Input placeholder="Cooking time" readOnly />
               <Select
                  styles={customStyles}
                  name="time"
                  value={{ value: time, label: time < 1 ? time : `${time} min` }}
                  options={[...Array(24)].map((_, index) => {
                     const value = (index + 1) * 5;
                     return { value: value, label: `${value} min` };
                  })}
                  onChange={handleSelectChange}
                  isClearable={false}
                  isSearchable
                  components={{ IndicatorSeparator: () => null }}
                  placeholder={null}
                  hasError={isClickDisabledButton && invalidFields.time}
               />
               {isClickDisabledButton && invalidFields.time && (
                  <ErrorMessage>Please select a cooking time</ErrorMessage>
               )}
            </InputWrapper>
         </Container>
      </div>
   );
};
