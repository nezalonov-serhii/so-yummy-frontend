
import { Link } from "react-router-dom";
import { Title, Item, Picture, List } from "./CategoriesGallery.styled";

import defaultImage from "../../../images/DefaultImage/defaultImage.svg"

const CategoriesGallery = ({recipes}) => {
   

    return <List>
    {recipes.map(recipe => {
        return <Item key={recipe._id}><Link to={`/recipe/${recipe._id}`}><Title>{recipe.title}</Title><Picture src={recipe.preview || defaultImage}/></Link></Item>
    })}

    </List>
     
  };
  export default CategoriesGallery;
