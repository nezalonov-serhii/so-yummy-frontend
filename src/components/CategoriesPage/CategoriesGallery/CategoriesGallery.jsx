
import { Link } from "react-router-dom";
import { Title, Item, Picture, List } from "./CategoriesGallery.styled";

const CategoriesGallery = ({recipes}) => {
   

    return <List>
    {recipes.map(recipe => {
        return <Item key={recipe._id}><Link to={`/recipe/${recipe._id}`}><Title>{recipe.title}</Title><Picture src={recipe.preview}/></Link></Item>
    })}

    </List>
     
  };
  export default CategoriesGallery;
