import { useState, useEffect } from "react";
import CategoriesGallery from "../../components/CategoriesPage/CategoriesGallery/CategoriesGallery";
import CategoriesList from "../../components/CategoriesPage/CategoriesList/CategoriesList";
import { Title } from "../../components/Title/Title";
import { useParams, useNavigate } from "react-router-dom";

import { Container } from "./CategoriesPage.styled";
import { fetchRecipesGallery } from "../../service/api/fetchRecipesGallery";

const CategoriesPage = () => {
  const [gallery, setGallery] = useState([]);
  const { categoryName   } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(
    categoryName[0].toUpperCase() + categoryName.slice(1)
  );
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipesGallery(selectedCategory).then((res) => setGallery(res));
  }, []);

  const chooseCategory = async (categorynewName) => {
    setSelectedCategory(categorynewName);

    navigate(`/categories/${categorynewName}`);

    const newGallery = await fetchRecipesGallery(categorynewName);
    setGallery(newGallery);

    return;
  };

  return (
    <Container>
      <Title>Categories</Title>
      <CategoriesList
        onSubmit={chooseCategory}
        selectedCategory={selectedCategory}
      />
      <CategoriesGallery recipes={gallery} />
    </Container>
  );
};
export default CategoriesPage;
