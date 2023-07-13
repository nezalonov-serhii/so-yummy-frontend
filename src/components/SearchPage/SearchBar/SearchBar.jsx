import { CommonSearchForm } from "../../CommonSearchForm/CommonSearchForm";
import { SearchTypeSelector } from "../SearchTypeSelector/SearchTypeSelector"
import { CustomButtonStyles } from "./SearchBar.styled";



export const SearchBar = () => {
   return (
      <>
       
       <CommonSearchForm CustomButtonComponent={CustomButtonStyles} />
         <SearchTypeSelector/>
      </>
   );
};
