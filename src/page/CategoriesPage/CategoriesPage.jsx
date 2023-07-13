import { useState, useEffect } from "react";
import CategoriesGallery from "../../components/CategoriesPage/CategoriesGallery/CategoriesGallery";
import CategoriesList from "../../components/CategoriesPage/CategoriesList/CategoriesList";
import { Title } from "../../components/Title/Title";

import { Container } from "./CategoriesPage.styled";
import { fetchRecipesGallery } from "../../service/api/fetchRecipesGallery";

const CategoriesPage = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(()=>{
   fetchRecipesGallery("Breakfast").then(res => setGallery(res));
  
  }, [])

  const chooseCategory = async (categoryName) => {
    const newGallery = await fetchRecipesGallery(categoryName);
    console.log(newGallery);
    setGallery(newGallery);

    return;
  };

  return (
    <Container>
      <Title>Categories</Title>
      <CategoriesList onSubmit={chooseCategory} />
      <CategoriesGallery recipes={gallery}/>
    </Container>
  );
};
export default CategoriesPage;
