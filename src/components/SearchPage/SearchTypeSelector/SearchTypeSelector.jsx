// import { useSearchParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import {SearchSelect,SearchSelectorBox,SelectorOption,StyledHelperText,StyledFormControl} from "./SearchTypeSelector.styled";
import FormControl from '@mui/material/FormControl';
import { selectSearchValue } from '../../../redux/selector/selectors';
// import { useState } from 'react';
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/Slice/searchSelectSlice/searchSelectSlice";
export const SearchTypeSelector = () => {
const valueSelector = useSelector(selectSearchValue);
  // const [selectValue, setSelectValue] = useState('');
const dispatch = useDispatch();
  const handleChange = (e) => {
    
dispatch(setSearch(e.target.value));


  };
    return (
    
     <SearchSelectorBox >
            <FormControl fullWidth>
                <StyledFormControl>
                 <StyledHelperText id="username-helper">
                   Search by:
                </StyledHelperText>
             
               
        <SearchSelect
       onChange={handleChange}
          defaultValue={"Title"}
          value = {valueSelector} 
        
        >
          <SelectorOption value="Title" >Title</SelectorOption>
          <SelectorOption  value="Ingridients">Ingridients</SelectorOption>
          
                    </SearchSelect>
                    </StyledFormControl>
      </FormControl>
    </SearchSelectorBox>
        )
 }