import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { outlinedInputClasses, selectClasses } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

const SearchSelectorBox = styled(Box)`
  display: flex;
  width: 223px;
  align-items: center;
  margin: 24px auto 42px;

  @media (min-width: 768px) {
    margin: 28px auto 42px;
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
  width: 146px;
  height: 34px;
  background-color: rgba(217, 217, 217, 15.7%);
  margin-left: 8px;

  border-radius: 6px;

  font-family: Poppins;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: left;

  color: var(--text-third);

  & .${selectClasses.icon} {
    color: #8baa36;
  }

  & .${outlinedInputClasses.notchedOutline} {
    border: 1px solid transparent;
  }
  &:hover .${outlinedInputClasses.notchedOutline} {
    border: 1px solid #8baa36;
  }
  &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline} {
    border: 1px solid #8baa36;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    width: 175px;
    height: 41px;
  }

  @media (min-width: 1280px) {
    width: 198px;
    height: 49px;
  }
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
  padding-left: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
  background-color: var(--select-option);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--text-third);
  @media (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  :hover,
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
