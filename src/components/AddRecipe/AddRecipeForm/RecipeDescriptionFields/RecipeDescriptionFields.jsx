// import categories from "../../../../categories.json";
import {
  Container,
  Input,
  InputWrapper,
} from "./RecipeDescriptionFields.styled";

import Select from "react-select";
import { ImageRecipe } from "../ImageRecipe/ImageRecipe";

import { useDispatch, useSelector } from "react-redux";
import { setDescription } from "../../../../redux/Slice/addRecipeSlice/addRecipeFormSlice";
import { fetchCategories } from "../../../../redux/thunk/addRecipe/operations";
import { useEffect } from "react";

export const RecipeDescriptionFields = () => {
  const dispatch = useDispatch();
  const { title, about, category, time } = useSelector((state) => state.data);
  const categories = useSelector((state) => state.addRecipe.categories.items);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    dispatch(setDescription({ [name]: value }));
  };

  const handleSelectChange = (selectedOption, action) => {
    if (action.name === "category") {
      dispatch(setDescription({ category: selectedOption.value }));
    } else if (action.name === "time") {
      dispatch(setDescription({ time: selectedOption.value }));
    }
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
          />
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
          />
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
          />
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
          />
        </InputWrapper>
      </Container>
    </div>
  );
};
