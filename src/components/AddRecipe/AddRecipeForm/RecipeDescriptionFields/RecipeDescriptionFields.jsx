// import categories from "../../../../categories.json";
import { useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import { ImageRecipe } from "../ImageRecipe/ImageRecipe";

import {
  setDescription,
  setFormValidity,
  validateForm,
} from "../../../../redux/Slice/addRecipeSlice/addRecipeFormSlice";
import { fetchCategories } from "../../../../redux/thunk/addRecipe/operations";

import {
  Container,
  Input,
  InputWrapper,
  Wrapper,
} from "./RecipeDescriptionFields.styled";
import { ErrorMessage } from "../AddRecipeForm.styled";

export const RecipeDescriptionFields = () => {
  const dispatch = useDispatch();
  const {
    title,
    about,
    category,
    time,
    invalidFields,
    isFormValid,
    isClickDisabledButton,
  } = useSelector((state) => state.data);
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
      padding: "8px 14px",
      maxHeight: "144px",
      backgroundColor: "transparent",
      "@media screen and (min-width: 768px) and (max-width: 1279px)": {
        maxHeight: "162px",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      color: "black",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "-0.24px",
      margin: "4px 0",
      padding: "0px",
      "@media screen and (min-width: 768px) and (max-width: 1279px)": {
        fontSize: "14px",
        letterSpacing: "-0.28px",
      },
      // marginTop: "4px",
      // padding: "0px",
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
    <Wrapper>
      <ImageRecipe />
      <Container>
        <InputWrapper hasError={isClickDisabledButton && invalidFields.title}>
          <Input
            placeholder="Enter item title"
            type="text"
            name="title"
            value={title}
            min={3}
            onChange={handleChange}
            title="Title may contain min 3 letters"
            required
          />
          {isClickDisabledButton && invalidFields.title && (
            <ErrorMessage>Please enter title</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper hasError={isClickDisabledButton && invalidFields.about}>
          <Input
            placeholder="Enter about recipe"
            type="text"
            name="about"
            value={about}
            min={5}
            onChange={handleChange}
            title="Text may contain min 5 letters"
            required
          />
          {isClickDisabledButton && invalidFields.about && (
            <ErrorMessage>Please enter description</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper
          hasError={isClickDisabledButton && invalidFields.category}
        >
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
        <InputWrapper hasError={isClickDisabledButton && invalidFields.time}>
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
    </Wrapper>
  );
};
