import { FavCard } from "../FavCard/FavCard";
import { FavList } from "./FavopiteList.styled";

export const FavoriteList = ({ recipes, onDelete }) => {
   return (
      <FavList>
         {recipes?.map(({ _id, title, preview, description, time }) => (
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
