import { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import { Title } from "../../components/Title/Title"
import { SearchBar } from "../../components/SearchPage/SearchBar/SearchBar"
import { SearchedRecipesList } from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList"
import { SearchPageContainer } from "./SearchPage.styled";
import { searchByTitle, searchByIngridients } from "../../service/api/apiSearch";
import { selectSearchValue } from '../../redux/selector/selectors';



const SearchPage = () => {
  const valueSelector = useSelector(selectSearchValue);
  const [searchFormValue, setSearchFormValue] = useState('');
    const handleSearchFormInput = (inputValue) => {
   setSearchFormValue(inputValue)
  };
  
   
  const [recipeList, setrecipeList] = useState('');
  useEffect(() => {
    
    if (searchFormValue === "") {
      
      return 
    }
    if (valueSelector === "Title") {
      console.log("Search By Title",searchFormValue)
      searchByTitle({ query: searchFormValue }).then(({ data }) => setrecipeList(data.data)).finally(setSearchFormValue(""))
    }
    else {
      console.log("Search By Ingridients",searchFormValue)
      searchByIngridients({ query: searchFormValue }).then(({ data }) => setrecipeList(data.data)).finally(setSearchFormValue(""))
    }
  },
    [searchFormValue]
    // [searchFormValue, valueSelector]
  );
  return (
    <SearchPageContainer>
    <Title>Search</Title>
    <SearchBar handleSearchFormInput={handleSearchFormInput} />
    <SearchedRecipesList listOfRecipes={recipeList} />
    </SearchPageContainer>
  
  )
};
export default SearchPage;

