import { CommonSearchForm } from "../../CommonSearchForm/CommonSearchForm";
import { SearchTypeSelector } from "../SearchTypeSelector/SearchTypeSelector"
import { CustomButtonStyles, CustomSearchFormContainer } from "./SearchBar.styled";



export const SearchBar = () => {
   return (
      <>
       
       <CommonSearchForm 
         CustomButtonComponent={CustomButtonStyles}
         SearchFormContainer={CustomSearchFormContainer}/>
         <SearchTypeSelector/>
      </>
   );
};
