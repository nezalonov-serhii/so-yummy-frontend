import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Title } from "../../components/Title/Title";
import { SearchBar } from "../../components/SearchPage/SearchBar/SearchBar";
import { SearchedRecipesList } from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList";
import { SearchPageContainer } from "./SearchPage.styled";
import { searchByTitle, searchByIngridients } from "../../service/api/apiSearch";
import { selectSearchValue } from '../../redux/selector/selectors';

const SearchPage = () => {
  const location = useLocation();
  const valueSelector = useSelector(selectSearchValue);
  const [searchFormValue, setSearchFormValue] = useState('');

  const handleSearchFormInput = (inputValue) => {
    setSearchFormValue(inputValue);
  };

  const [recipeList, setRecipeList] = useState([]);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    
    if (query) {
      setSearchFormValue(query);
    }
  }, [location.search]);
  
  useEffect(() => {
    if (searchFormValue === "") {
      return;
    }
    
    if (valueSelector === "Title") {
      console.log("Search By Title", searchFormValue);
      searchByTitle({ query: searchFormValue })
        .then(({ data }) => setRecipeList(data.data))
        .finally(() => setSearchFormValue(""));
    } else {
      console.log("Search By Ingredients", searchFormValue);
      searchByIngridients({ query: searchFormValue })
        .then(({ data }) => setRecipeList(data.data))
        .finally(() => setSearchFormValue(""));
    }
  }, [searchFormValue, valueSelector]);

  return (
    <SearchPageContainer>
      <Title>Search</Title>
      <SearchBar 
          handleSearchFormInput={handleSearchFormInput} 
          initialQuery={searchFormValue}
          />
      <SearchedRecipesList listOfRecipes={recipeList} />
    </SearchPageContainer>
  );
};

export default SearchPage;