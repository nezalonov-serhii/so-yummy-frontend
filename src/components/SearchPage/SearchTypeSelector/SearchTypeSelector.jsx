import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FormControl from "@mui/material/FormControl";

import { selectSearchValue } from "../../../redux/selector/selectors";
import { setSearch } from "../../../redux/Slice/searchSelectSlice/searchSelectSlice";

import {
   SearchSelect,
   SearchSelectorBox,
   SelectorOption,
   StyledHelperText,
   StyledFormControl,
} from "./SearchTypeSelector.styled";

export const SearchTypeSelector = () => {
   const valueSelector = useSelector(selectSearchValue);
   const dispatch = useDispatch();
   const handleChange = (e) => {
      dispatch(setSearch(e.target.value));
   };
   return (
      <SearchSelectorBox>
         <FormControl fullWidth>
            <StyledFormControl>
               <StyledHelperText id="username-helper">Search by:</StyledHelperText>

               <SearchSelect onChange={handleChange} defaultValue={"Title"} value={valueSelector}
                  MenuProps={{
                     style: { position: 'absolute'}
              ,
                   disableScrollLock: true
              ,sx: {
                "&& .Mui-selected, && .Mui-selected:hover, && .Mui-selected:focus":
                  {
                    backgroundColor: "var(--select-option)",
                  },
                "&& .MuiMenu-list": {
                  paddingTop: "0",
                  paddingBottom: "0",
                },
              },
            }}
               >
                  <SelectorOption value="Title">Title</SelectorOption>
                  <SelectorOption value="Ingredients">Ingredients</SelectorOption>
               </SearchSelect>
            </StyledFormControl>
         </FormControl>
      </SearchSelectorBox>
   );
};
