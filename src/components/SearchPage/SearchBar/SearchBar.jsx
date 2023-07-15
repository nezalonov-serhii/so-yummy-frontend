import React, { useState, useEffect } from "react";
import { CommonSearchForm } from "../../CommonSearchForm/CommonSearchForm";
import { SearchTypeSelector } from "../SearchTypeSelector/SearchTypeSelector";
import { CustomButtonStyles, CustomSearchFormContainer } from "./SearchBar.styled";

export const SearchBar = ({ handleSearchFormInput, initialQuery }) => {
  const [query, setQuery] = useState(initialQuery);
  
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <>
      <CommonSearchForm
        handleSearchFormInput={handleSearchFormInput}
        CustomButtonComponent={CustomButtonStyles}
        SearchFormContainer={CustomSearchFormContainer}
        initialQuery={query}
      />
      <SearchTypeSelector />
    </>
  );
};