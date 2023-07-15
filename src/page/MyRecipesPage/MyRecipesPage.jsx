import { Title } from "../../components/Title/Title";
// import { FavoriteList } from "../../components/FavPage/FavList/FavoriteList";
import {
  // useEffect,
  useState
} from "react";
import Loader from "../../components/Loader/Loader";
// import { deleteRecipeFromFavorite, getFavoriteRecipes } from "../../service/api/Favorite-Api";
import { WrapPage } from "./MyRecipesPage.styled";
import PlugIfNotFound from "../../components/PlugIfNotFound/PlugIfNotFound";


const MyRecipesPage = () => {
  const [recipes,
    // setRecipes
  ] = useState([]);
  // const [, setError] = useState(null);
  const [isLoading,
    // setIsLoading
  ] = useState(false);
  
  return (
    <WrapPage>
      {isLoading && <Loader />}
      <Title>My recipes</Title>
      {recipes&&<PlugIfNotFound>There are not recipes yet</PlugIfNotFound>}
      {/* {recipes && <FavoriteList recipes={recipes} onDelete={hendleDeleteRecipeById} />} */}
    </WrapPage>
  );
};
export default MyRecipesPage;
