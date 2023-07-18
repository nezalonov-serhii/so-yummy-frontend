import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Title } from "../../components/Title/Title";
import { SearchBar } from "../../components/SearchPage/SearchBar/SearchBar";
import { SearchedRecipesList } from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList";
import { SearchPageContainer } from "./SearchPage.styled";
import { searchByTitle, searchByIngredients } from "../../service/api/apiSearch";
import { selectSearchValue } from '../../redux/selector/selectors';
import Loader from "../../components/Loader/Loader";

const SearchPage = () => {
  
  const valueSelector = useSelector(selectSearchValue);
  const [searchFormValue, setSearchFormValue] = useState('');
   const [isLoading, setIsLoading] = useState(false);

const handleSearchFormInput = (inputValue) => {
    setSearchFormValue(inputValue);
  };

  const [recipeList, setRecipeList] = useState([]);
  

  useEffect(() => {
    setIsLoading(true);
    if (searchFormValue === "") {
      setIsLoading(false);
      return;
    }
    
    if (valueSelector === "Title") {
      console.log("Search By Title", searchFormValue);
      searchByTitle({ query: searchFormValue })
        .then(({ data }) => setRecipeList(data.data))
        .finally(() => {
          setSearchFormValue("")
      setIsLoading(false);
        });
    } else {
      console.log("Search By Ingredients", searchFormValue);
      searchByIngredients({ query: searchFormValue })
        .then(({ data }) => setRecipeList(data.data))
        .finally(() => {
          setSearchFormValue("")
          setIsLoading(false);
        }
      );
    }
  }, [searchFormValue, valueSelector]);

  return (
    <SearchPageContainer>
      <Title>Search</Title>

      <SearchBar 
          handleSearchFormInput={handleSearchFormInput} 
          initialQuery={searchFormValue}
          />
             {isLoading ? (
        <Loader />
      ) : (
        
        <SearchedRecipesList listOfRecipes={recipeList} />)}
    </SearchPageContainer>
  );
};

export default SearchPage;