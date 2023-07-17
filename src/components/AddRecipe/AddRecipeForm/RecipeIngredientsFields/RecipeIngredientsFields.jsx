// import ingredients from "../../../../ingredients.json";
import Select from "react-select";
import {
  Container,
  Counter,
  CounterButton,
  DelButton,
  IconDelete,
  IconMinus,
  IconPlus,
  InputAmount,
  Li,
  List,
  SelectWrapper,
  WrapperCounter,
} from "./RecipeIngredientsFields.styled";

import { Title } from "../../AddRecipe.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddIngredients,
  validateForm,
} from "../../../../redux/Slice/addRecipeSlice/addRecipeFormSlice";
import { fetchIngredients } from "../../../../redux/thunk/addRecipe/operations";
import { useEffect } from "react";
import { ErrorMessage } from "../AddRecipeForm.styled";

export const RecipeIngredientsFields = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.addRecipe.ingredients.items);
  const { listItems, isClickDisabledButton, invalidFields } = useSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const options = ingredients.map(({ name, _id }) => ({
    value: name,
    label: name,
    _id,
  }));

  const handleClickPlus = (event) => {
    event.preventDefault();
    dispatch(setAddIngredients([...listItems, { selectedOption: null }]));
  };

  const handleClickMinus = (event) => {
    event.preventDefault();
    listItems.length > 0 && dispatch(setAddIngredients(listItems.slice(0, -1)));
  };

  const onDelButton = (event, index) => {
    event.preventDefault();
    dispatch(setAddIngredients(listItems.filter((_, i) => i !== index)));
  };

  const handleChange = (index, selectedOption) => {
    dispatch(
      setAddIngredients(
        listItems.map((item, i) =>
          i === index ? { ...item, selectedOption } : item
        )
      )
    );

    dispatch(validateForm());
  };
  const handleAmountChange = (index, value) => {
    dispatch(
      setAddIngredients(
        listItems.map((item, i) =>
          i === index ? { ...item, measure: value } : item
        )
      )
    );
  };

  const customStyles = {
    control: (baseStyles, state) => ({
      // width: 198,
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
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "var(--accent-color)",
    }),
  };

  return (
    <Container>
      <WrapperCounter>
        <Title>Ingredients</Title>
        <Counter>
          <CounterButton onClick={handleClickMinus} name="minus">
            <IconMinus />
          </CounterButton>
          <p>{listItems.length}</p>
          <CounterButton onClick={handleClickPlus} name="plus">
            <IconPlus />
          </CounterButton>
        </Counter>
      </WrapperCounter>
      <List>
        {listItems.map((item, index) => {
          return (
            <Li key={index}>
              <SelectWrapper
                hasError={isClickDisabledButton && !item.selectedOption}
              >
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
                hasError={
                  isClickDisabledButton &&
                  (!item.measure || item.measure.trim() === "")
                }
              />
              <DelButton onClick={(event) => onDelButton(event, index)}>
                <IconDelete />
              </DelButton>
            </Li>
          );
        })}
      </List>
      {isClickDisabledButton && invalidFields.listItems && (
        <ErrorMessage>Please add the ingredients</ErrorMessage>
      )}
    </Container>
  );
};
