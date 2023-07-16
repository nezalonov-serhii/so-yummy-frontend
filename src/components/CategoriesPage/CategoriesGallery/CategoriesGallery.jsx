
import { Link } from "react-router-dom";
import { Title, Item, Picture, List } from "./CategoriesGallery.styled";

import defaultImage from "../../../images/DefaultImage/defaultImage.svg"

const CategoriesGallery = ({recipes}) => {
    const onImageError = (e) => {
        e.target.src = defaultImage
      }
    

    return <List>
    {recipes.map(recipe => {
        return <Item key={recipe._id}><Link to={`/recipes/${recipe._id}`}><Title>{recipe.title}</Title><Picture src={recipe.preview? recipe.preview : defaultImage} onError={onImageError}/></Link></Item>
    })}

    </List>
     
  };
  export default CategoriesGallery;