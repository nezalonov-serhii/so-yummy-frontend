
import categories from "../../../service/api/categories.json"

import { List, Button,Item  } from "./CategoriesList.styled";



const CategoriesList = ({onSubmit}) => {

    return <>
    <List>
    {categories.map(category => {
        return  <Item  key={category._id} >
    <Button  onClick = {() => onSubmit(category.name)} >
    {category.name}
    </Button>
  </Item>
 })}
    </List>
    </>
     
  };
  export default CategoriesList;