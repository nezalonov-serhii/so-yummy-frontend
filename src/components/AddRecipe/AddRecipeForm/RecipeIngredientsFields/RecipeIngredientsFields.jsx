import React, { useEffect } from "react";
import ingredients from "../../../../ingredients.json";

import { useState } from "react";
// import { useSelector } from "react-redux";
import Select from "react-select";
import {
  Container,
  Counter,
  CounterButton,
  DelButton,
  InputAmount,
  Li,
  List,
  SelectWrapper,
  WrapperCounter,
} from "./RecipeIngredientsFields.styled";

import { Title } from "../../AddRecipe.styled";

const options = ingredients.map(({ name }) => ({ value: name, label: name }));

export const RecipeIngredientsFields = ({ onChange }) => {
  const [listItems, setListItems] = useState([]);

  // const ingredients = useSelector((state) => state.addRecipe.ingredients.items);

  useEffect(() => {
    onChange(
      listItems.map((item) => ({
        value: item.selectedOption?.value,
        amount: item.amount,
      }))
    );
  }, [listItems]);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.name === "plus") {
      setListItems((prevItems) => [...prevItems, { selectedOption: null }]);
    } else if (event.target.name === "minus" && listItems.length > 0) {
      setListItems((prevItems) => prevItems.slice(0, -1));
    }
  };

  const onDelButton = (event, index) => {
    event.preventDefault();
    setListItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleChange = (index, selectedOption) => {
    setListItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, selectedOption } : item
      )
    );
  };

  const handleAmountChange = (index, value) => {
    setListItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, amount: value } : item
      )
    );
  };

  const customStyles = {
    control: (baseStyles, state) => ({
      width: 198,
      backgroundColor: "rgba(245, 245, 245, 1)",
      padding: 6,
      border: "none",
      borderRadius: 7,
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
  };
  return (
    <Container>
      <WrapperCounter>
        <Title>Ingredients</Title>
        <Counter>
          <CounterButton onClick={handleClick} name="minus">
            -
          </CounterButton>
          <p>{listItems.length}</p>
          <CounterButton onClick={handleClick} name="plus">
            +
          </CounterButton>
        </Counter>
      </WrapperCounter>
      <List>
        {listItems.map((item, index) => {
          return (
            <Li key={index}>
              <SelectWrapper>
                <Select
                  name={ingredients}
                  styles={customStyles}
                  value={item.selectedOption}
                  onChange={(selectedOption) =>
                    handleChange(index, selectedOption)
                  }
                  options={options}
                  isClearable={false}
                  isSearchable
                  components={{ IndicatorSeparator: () => null }}
                  placeholder={null}
                />
              </SelectWrapper>
              <InputAmount
                placeholder="volume"
                onChange={(event) =>
                  handleAmountChange(index, event.target.value)
                }
              />
              <DelButton onClick={(event) => onDelButton(event, index)}>
                X
              </DelButton>
            </Li>
          );
        })}
      </List>
    </Container>
  );
};
