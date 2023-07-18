import { List, Button, Item } from "./CategoriesList.styled";

const CategoriesList = ({ onSubmit, selectedCategory, categories }) => {
   return (
      <>
         <List>
            {categories.map((category) => (
               <Item key={category} selectedCategory>
                  <Button
                     name={category}
                     onClick={() => onSubmit(category)}
                     isSelected={selectedCategory === category}
                  >
                     {category}
                  </Button>
               </Item>
            ))}
         </List>
      </>
   );
};
export default CategoriesList;
