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
  margin: 24px auto 50px;

  @media (min-width: 768px) {
    margin: 28px auto 74px;
    width: 265px;
  }

  @media (min-width: 1280px) {
    margin: 27px auto 90px;
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
  background-color: rgba(217, 217, 217, 15.7%);
  margin-left: 8px;
  border: 1px solid transparent;
  border-radius: 6px;

  font-family: Poppins;
  padding: 8px 14px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: left;

  color: var(--text-other);
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
  min-width: fit-content;

  color: var(--title);
  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

const SelectorOption = styled(MenuItem)`
  display: block;
  outline: none;
  border: transparent;
  appearance: unset;
  padding: 14px;
  background-color: var(--select-option);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--text-other);
  :hover {
    background-color: var(--select-option);
  }
  :focus {
    background-color: var(--select-option);
  }
`;

export {
  SearchSelect,
  SearchSelectorBox,
  SelectorOption,
  StyledHelperText,
  StyledFormControl,
};
