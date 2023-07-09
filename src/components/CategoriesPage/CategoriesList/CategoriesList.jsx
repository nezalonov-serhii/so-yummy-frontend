
import categories from "../../../service/api/categories.json"
import { Box,Tab, Tabs} from "@mui/material";
import { List  } from "./CategoriesList.styled";



const CategoriesList = ({onSubmit, recipes}) => {

    return <>
    <List>
    {categories.map(category => {
        return  <Box sx={{ borderBottom: 1, borderColor: 'rgba(224, 224, 224, 1)'}}>
  <Tabs  key={category._id} >
    <Tab label={category.name} onClick = {() => onSubmit(category.name)} sx={{padding:" 10px 0px 32px 29px", color:"rgba(224, 224, 224, 1)", fontFamily:"Poppins", fontWeight:"400", textTransform:"capitalize" }} />
  </Tabs>
</Box> })}
    </List>
    </>
     
  };
  export default CategoriesList;