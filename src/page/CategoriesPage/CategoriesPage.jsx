import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { fetchRecipesGallery } from "../../service/api/fetchRecipesGallery";
import { fetchCategories } from "../../service/api/fetchCategories";

import CategoriesGallery from "../../components/CategoriesPage/CategoriesGallery/CategoriesGallery";
import CategoriesList from "../../components/CategoriesPage/CategoriesList/CategoriesList";
import { Title } from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";

import { Container } from "./CategoriesPage.styled";

const CategoriesPage = () => {
   const [gallery, setGallery] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isGalleryLoading, setIsGalletLoading] = useState(false);
   const { categoryName } = useParams();
   const [selectedCategory, setSelectedCategory] = useState(
      categoryName[0].toUpperCase() + categoryName.slice(1)
   );
   const navigate = useNavigate();

   const [categories, setCategories] = useState([]);

   useEffect(() => {
      setIsLoading(true);
      fetchCategories().then((res) => {
         setCategories(res);
         setIsLoading(false);
      });
   }, []);

   useEffect(() => {
      setIsGalletLoading(true);
      fetchRecipesGallery(selectedCategory).then((res) => {
         setGallery(res);
         setIsGalletLoading(false);
      });
   }, [selectedCategory]);

   // useEffect(()=>{
   //    setIsGalletLoading(true)
   //    fetchRecipesGallery(selectedCategory).then((res) => {
   //       setGallery(res)
   //       setIsGalletLoading(false)
   //    });
   // }, [])

   const chooseCategory = async (categorynewName) => {
      setSelectedCategory(categorynewName);
      navigate(`/categories/${categorynewName}`);
      return;
   };

   return (
      <Container>
         <Title>Categories</Title>
         {isLoading ? (
            <Loader />
         ) : (
            <>
               <CategoriesList
                  onSubmit={chooseCategory}
                  selectedCategory={selectedCategory}
                  categories={categories}
               />
               {isGalleryLoading ? <Loader /> : <CategoriesGallery recipes={gallery} />}
            </>
         )}
      </Container>
   );
};
export default CategoriesPage;
