import { useState, useEffect } from "react";
import CategoriesGallery from "../../components/CategoriesPage/CategoriesGallery/CategoriesGallery";
import CategoriesList from "../../components/CategoriesPage/CategoriesList/CategoriesList";
import { Title } from "../../components/Title/Title";

import { Container } from "./CategoriesPage.styled";
import { fetchRecipesGallery } from "../../service/api/fetchRecipesGallery";

const CategoriesPage = () => {
  const [gallery, setGallery] = useState([]);
  const[selectedCategory, setCategory] = useState("Breakfast")


  useEffect(()=>{
   fetchRecipesGallery(selectedCategory).then(res => setGallery(res));
  
  }, [])




  const chooseCategory = async (categoryName) => {
    console.log(categoryName)
    setCategory(categoryName)
    const newGallery = await fetchRecipesGallery(categoryName);
    
    // console.log(category)
    console.log(categoryName)

    


    // if(category === categoryName ){

    //   console.log(categoryName.el)
      
    // }

    setGallery(newGallery);

    return;
  };

  return (
    <Container>
      <Title>Categories</Title>
      <CategoriesList onSubmit={chooseCategory} selectedCategory={selectedCategory} />
      <CategoriesGallery recipes={gallery}/>
    </Container>
  );
};
export default CategoriesPage;
