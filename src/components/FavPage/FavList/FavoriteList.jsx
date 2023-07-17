import { FavCard } from "../FavCard/FavCard";
import { FavList } from "./FavopiteList.styled";

export const FavoriteList = ({ recipes, onDelete }) => {
   console.log(recipes);
   return (
      <FavList>
         {recipes?.favoriteRecipes?.map(({ _id, title, preview, description, time }) => (
            <FavCard
               id={_id}
               key={_id}
               title={title}
               preview={preview}
               description={description}
               time={time}
               onDelete={onDelete}
            />
         ))}
      </FavList>
   );
};
