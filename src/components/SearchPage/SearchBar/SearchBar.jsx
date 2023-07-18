import { CommonSearchForm } from "../../CommonSearchForm/CommonSearchForm";

import { SearchTypeSelector } from "../SearchTypeSelector/SearchTypeSelector";

import { CustomButtonStyles, CustomSearchFormContainer } from "./SearchBar.styled";

export const SearchBar = ({ handleSearchFormInput }) => {
   return (
      <>
         <CommonSearchForm
            handleSearchFormInput={handleSearchFormInput}
            CustomButtonComponent={CustomButtonStyles}
            SearchFormContainer={CustomSearchFormContainer}
         />
         <SearchTypeSelector />
      </>
   );
};
