import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import categories from "../../../../categories.json";
import {
  Container,
  Input,
  InputWrapper,
} from "./RecipeDescriptionFields.styled";

import Select from "react-select";
import { ImageRecipe } from "../ImageRecipe/ImageRecipe";

export const RecipeDescriptionFields = ({
  onDescriptionChange: onChange,
  onImageChange,
}) => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");

  // const categories = useSelector((state) => state.addRecipe.categories.items);
  useEffect(() => {
    onChange({ title, about, category, time });
  }, [title, about, category, time]);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "about":
        setAbout(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "time":
        setTime(value);
        break;
      default:
        return;
    }
  };

  const handleSelectChange = (selectedOption, action) => {
    if (action.name === "category") {
      setCategory(selectedOption.value);
    } else if (action.name === "time") {
      setTime(selectedOption.value);
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
  };

  return (
    <div>
      <ImageRecipe onChange={onImageChange} />
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
            options={categories.map(({ name }) => ({
              value: name,
              label: name,
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
