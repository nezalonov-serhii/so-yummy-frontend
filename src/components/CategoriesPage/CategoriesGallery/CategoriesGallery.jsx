import { Link } from "react-router-dom";

import defaultImage from "../../../images/DefaultImage/defaultImage.svg";

import { Title, Item, Picture, List } from "./CategoriesGallery.styled";

const CategoriesGallery = ({ recipes }) => {
   const onImageError = (e) => {
      e.target.src = defaultImage;
   };

   return (
      <List>
         {recipes.map((recipe) => {
            return (
               <Item key={recipe._id}>
                  <Link to={`/recipe/${recipe._id}`}>
                     <Title>{recipe.title}</Title>
                     <Picture
                        src={recipe.preview ? recipe.preview : defaultImage}
                        alt={recipe?.title}
                        onError={onImageError}
                     />
                  </Link>
               </Item>
            );
         })}
      </List>
   );
};
export default CategoriesGallery;
