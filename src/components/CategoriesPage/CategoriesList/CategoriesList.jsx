import {useState, useEffect} from "react"

import { List, Button, Item  } from "./CategoriesList.styled";
import { fetchCategories } from "../../../service/api/fetchCategories";



const CategoriesList = ({onSubmit}) => {

  const [categories,setCategories] = useState([]);

  useEffect(()=> {
    fetchCategories().then(res => setCategories(res))
  }, [])

    return <>
    <List>
      {categories.map(category => <Item  key={category} ><Button name={category} onClick = {() => onSubmit(category)}>{category}</Button></Item> )}
    </List>
    </>
     
  };
  export default CategoriesList;