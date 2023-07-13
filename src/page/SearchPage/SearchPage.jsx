import { useEffect,useState } from "react";
import { Title } from "../../components/Title/Title"
import { SearchBar } from "../../components/SearchPage/SearchBar/SearchBar"
import { SearchedRecipesList } from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList"
import { SearchPageContainer } from "./SearchPage.styled";
import { searchByTitle } from "../../service/api/apiSearch";
const SearchPage = () => {
  const [recipeList, setrecipeList] = useState('');
  return (
    <SearchPageContainer>
    <Title>Search</Title>
    <SearchBar />
    <SearchedRecipesList />
    </SearchPageContainer>
  
  )
};
export default SearchPage;

