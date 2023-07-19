import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectSearchValue } from "../../redux/selector/selectors";
import { searchByTitle, searchByIngredients } from "../../service/api/apiSearch";

import { Title } from "../../components/Title/Title";
import { SearchBar } from "../../components/SearchPage/SearchBar/SearchBar";
import { SearchedRecipesList } from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList";
import Loader from "../../components/Loader/Loader";

import { Container, SearchPageContainer } from "./SearchPage.styled";

const SearchPage = () => {
   const valueSelector = useSelector(selectSearchValue);
   const [searchFormValue, setSearchFormValue] = useState("");
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
         searchByTitle({ query: searchFormValue })
            .then(({ data }) => setRecipeList(data.data))
            .finally(() => {
               setSearchFormValue("");
               setIsLoading(false);
            });
      } else {
         searchByIngredients({ query: searchFormValue })
            .then(({ data }) => setRecipeList(data.data))
            .finally(() => {
               setSearchFormValue("");
               setIsLoading(false);
            });
      }
   }, [searchFormValue, valueSelector]);

   return (
      <SearchPageContainer>
         <Title>Search</Title>

         <Container>
            <SearchBar
               handleSearchFormInput={handleSearchFormInput}
               initialQuery={searchFormValue}
            />
            {isLoading ? <Loader /> : <SearchedRecipesList listOfRecipes={recipeList} />}
         </Container>
      </SearchPageContainer>
   );
};

export default SearchPage;
