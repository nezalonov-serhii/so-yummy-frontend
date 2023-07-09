import { Title } from "../../components/Title/Title"
import { SearchBar } from "../../components/SearchPage/SearchBar/SearchBar"
import { SearchedRecipesList } from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList"
import { SearchPageContainer } from "./SearchPage.styled";


const SearchPage = () => {
  
  return (
    <SearchPageContainer>
    <Title>Search</Title>
    <SearchBar />
    <SearchedRecipesList />
    </SearchPageContainer>
  
  )
};
export default SearchPage;

