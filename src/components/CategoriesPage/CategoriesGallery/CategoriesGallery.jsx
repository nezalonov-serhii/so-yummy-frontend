
import { Title, Item, Picture, List } from "./CategoriesGallery.styled";

const CategoriesGallery = ({recipes}) => {
   

    return <List>
    {recipes.map(recipe => {
        return <Item key={recipe._id}><Title>{recipe.title}</Title><Picture src={recipe.preview}/></Item>
    })}

    </List>
     
  };
  export default CategoriesGallery;