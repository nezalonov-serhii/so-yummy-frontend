import {SearchSelectorBox,SearchSelectorLabel,  SearchSelector
} from "./SearchTypeSelector.styled"

export const SearchTypeSelector = () => {
    return (
        
        <SearchSelectorBox>
       <SearchSelectorLabel htmlFor="type">Search by:</SearchSelectorLabel>

            {/* <SelectorBox> */}
            <SearchSelector id="type" name="type">
  <option value="title">Title</option>
  <option value="ingridients">Ingridients</option>
  
                </SearchSelector>
                 {/* </SelectorBox> */}
            </SearchSelectorBox>
           
    )
}
