import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { fetchRecipesGallery } from "../../service/api/fetchRecipesGallery";
import { fetchCategories } from "../../service/api/fetchCategories";

import CategoriesGallery from "../../components/CategoriesPage/CategoriesGallery/CategoriesGallery";
import CategoriesList from "../../components/CategoriesPage/CategoriesList/CategoriesList";
import { Title } from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";
import { LoadMoreButton } from "../../components/CategoriesPage/LoadMoreButton/LoadMoreButton";

import { Container } from "./CategoriesPage.styled";

const CategoriesPage = () => {
   const [gallery, setGallery] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isGalleryLoading, setIsGalletLoading] = useState(false);
   const [page, setPage] = useState(1);
   const [total, setTotal] = useState(0);
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
      fetchRecipesGallery(selectedCategory, 1).then((res) => {
         setGallery(res.data);
         setTotal(res.qty.total);
         setPage(1);
         setIsGalletLoading(false);
      });
   }, [selectedCategory]);

   useEffect(() => {
      setIsGalletLoading(true);
      fetchRecipesGallery(selectedCategory, page).then((res) => {
         page > 1
            ? setGallery((prevGallery) => [...prevGallery, ...res.data])
            : setGallery(res.data);
         setTotal(res.qty.total);
         setIsGalletLoading(false);
      });
      // eslint-disable-next-line
   }, [page]);

   const handleLoadMore = () => {
      setPage((prevPage) => prevPage + 1);
   };

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
               {isLoading ? <Loader /> : <CategoriesGallery recipes={gallery} />}
            </>
         )}
         {total > 8 && gallery.length < total && (
            <LoadMoreButton onClick={handleLoadMore} isDisabled={isGalleryLoading}>
               {isGalleryLoading && <Loader size={"20"} color={"var(--text-primary)"} />}
               {!isGalleryLoading && "Load more"}
            </LoadMoreButton>
         )}
      </Container>
   );
};
export default CategoriesPage;
