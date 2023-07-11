// import styled from "styled-components";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";

const SearchSelectorBox = styled(Box)`
  display: flex;
  width: 223px;
  align-items: center;
  margin: 0 auto;

  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 28px;
    width: 265px;
  }

  @media (min-width: 1024px) {
    width: 310px;
  }
`;
const StyledFormControl = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
`;
const SearchSelect = styled(Select)`
  /* display: inline-block; */
  width: 146px;
  height: 34px;
  background-color: #d9d9d9;
  margin-left: 8px;
  border: 1px solid transparent;
  border-radius: 6px;

  opacity: 15.7%;
  font-family: Poppins;
  padding: 8px 14px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: left;

  color: #000000;
  &:before {
    border-color: red;
  }
  :hover {
    border: 1px solid #23262a33;
  }
  :focus {
    border: 1px solid yellow;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    width: 175px;
    height: 41px;
    padding: 10px 14px;
  }

  @media (min-width: 1024px) {
    width: 198px;
    height: 49px;
  }
  /* & option {
    display: block;
    outline: none;
    border: transparent;
    appearance: unset;
    padding: 14px;
    background-color: #fafafa;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.02em;
    text-align: left;
    color: #000000;
  } */
`;

const StyledHelperText = styled(FormHelperText)`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.23999999463558197px;
  text-align: left;
  width: 62px;
  color: #001833;
  @media (min-width: 768px) {
    font-size: 14px;
    width: 72px;
  }

  @media (min-width: 1280px) {
    width: 94px;
    font-size: 18px;
  }
`;

const SelectorOption = styled(MenuItem)`
  display: block;
  outline: none;
  border: transparent;
  appearance: unset;
  padding: 14px;
  background-color: #fafafa;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: left;
  color: #000000;
  :hover {
    background-color: #fafafa;
  }
  :focus {
    background-color: #fafafa;
  }
`;

export {
  SearchSelect,
  SearchSelectorBox,
  SelectorOption,
  StyledHelperText,
  StyledFormControl,
};
