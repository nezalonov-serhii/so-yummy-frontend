import { useSearchParams } from 'react-router-dom';
import {SearchSelect,SearchSelectorBox,SelectorOption,StyledHelperText,StyledFormControl} from "./SearchTypeSelector.styled";
import FormControl from '@mui/material/FormControl';


export const SearchTypeSelector = () => {

  //   const [searchSelectedParams, setSearchSelectedParams] = useSearchParams();
  //   const submitSlectedSearch = e => {
  //     console.log(e.target.value)
  //  const  type = e.target.value
  //   e.preventDefault();
    
  //   setSearchSelectedParams({ type: "Beef" });
  //   form.reset();
  //   };
  // const query = searchSelectedParams.get("query")
  // const ingredients = searchSelectedParams.get("ingredients")
    return (
    // <SearchSelectorBox sx={{ maxWidth: 146 }}>
     <SearchSelectorBox >
            <FormControl fullWidth>
                <StyledFormControl>
                 <StyledHelperText id="username-helper">
                   Search by:
                </StyledHelperText>
                {/* <InputLabel id="demo-simple-select-label">{query}</InputLabel> */}
                {/* <InputLabel variant="standard" >{query}</InputLabel> */}
               
        <SearchSelect
        //   labelId="demo-simple-select-label"
        //   id="demo-simple-select"
          defaultValue={"Title"}
        
        
        >
          <SelectorOption value="Title" >Title</SelectorOption>
          <SelectorOption  value="Ingridients">Ingridients</SelectorOption>
          
                    </SearchSelect>
                    </StyledFormControl>
      </FormControl>
    </SearchSelectorBox>
        )
 }