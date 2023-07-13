import { useEffect,useState } from "react";
import { Title } from "../../components/Title/Title"
import { SearchBar } from "../../components/SearchPage/SearchBar/SearchBar"
import { SearchedRecipesList } from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList"
import { SearchPageContainer } from "./SearchPage.styled";
import { searchByTitle } from "../../service/api/apiSearch";
const SearchPage = () => {
  const [recipeList, setrecipeList] = useState('');
    useEffect(() => {
    searchByTitle({ query: "Carrot" }).then(({data}) => setrecipeList(data.data))
    },[]
    // [recipeList]
  );
  return (
    <SearchPageContainer>
    <Title>Search</Title>
    <SearchBar />
    <SearchedRecipesList listOfRecipes={recipeList} />
    </SearchPageContainer>
  
  )
};
export default SearchPage;

