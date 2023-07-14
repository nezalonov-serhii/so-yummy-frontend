import { useSearchParams } from 'react-router-dom';
import {useSelector } from "react-redux";
import {SearchSelect,SearchSelectorBox,SelectorOption,StyledHelperText,StyledFormControl} from "./SearchTypeSelector.styled";
import FormControl from '@mui/material/FormControl';
import { selectSearchValue } from '../../../redux/selector/selectors';

export const SearchTypeSelector = () => {
const valueSelector = useSelector(selectSearchValue);
  
    return (
    
     <SearchSelectorBox >
            <FormControl fullWidth>
                <StyledFormControl>
                 <StyledHelperText id="username-helper">
                   Search by:
                </StyledHelperText>
             
               
        <SearchSelect
      
          defaultValue={"Title"}
         value = {valueSelector??"Title"}
        
        >
          <SelectorOption value="Title" >Title</SelectorOption>
          <SelectorOption  value="Ingridients">Ingridients</SelectorOption>
          
                    </SearchSelect>
                    </StyledFormControl>
      </FormControl>
    </SearchSelectorBox>
        )
 }