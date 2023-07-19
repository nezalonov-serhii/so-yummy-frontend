import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

import { getShoppingThunk, deleteShoppingThunk } from "../../redux/shopping/thunkShopping";

import Loader from "../Loader/Loader";
import BasketMob from "../../images/SearchPage/vegetable-fruit-basket-mob.png";
import BasketMob2x from "../../images/SearchPage/vegetable-fruit-basket-mob@2x.png";
import BacketTabDesk from "../../images/SearchPage/vegetable-fruit-basket-tab-desk.png";
import BacketTabDesk2x from "../../images/SearchPage/vegetable-fruit-basket-tab-desk@2x.png";

import { BacketWrapper, EmptyText } from "../../page/FavoritePage/FavoritePage.styled";
import {
   StyledIngridientsHeader,
   StyledIngridientsItem,
   StyledIngrsHeadThumb,
   StyledIngridientsContainer,
   StyledImageCardThumb,
   StyledImage,
   StyledQuantity,
   StyledFlexRow,
   StyledFlexQuantity,
   StyledListContainerIngridient,
   StyledCloseIcon,
} from "./StyledIngredientsShoppingList";

const lol = "123g/r/n223g";
const ok = lol.split("/r/n");

const IngredientsShoppingList = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getShoppingThunk());
   }, [dispatch]);

   const { shopping } = useSelector((state) => {
      return state.shopping;
   });

   const heandleDeleteButton = (id) => {
      dispatch(deleteShoppingThunk(id));
   };

   return (
      <StyledIngridientsContainer>
         {shopping.isLoading ? (
            <Loader />
         ) : (
            <>
               {shopping.items.length > 0 && (
                  <StyledIngridientsHeader>
                     <p>Product</p>
                     <StyledIngrsHeadThumb>
                        <p>Number</p>
                        <p>Remove</p>
                     </StyledIngrsHeadThumb>
                  </StyledIngridientsHeader>
               )}

               <StyledListContainerIngridient>
                  {shopping.items.length === 0 ? (
                     <BacketWrapper>
                        <picture>
                           <source
                              srcSet={`${BacketTabDesk}, ${BacketTabDesk2x} 2x`}
                              media="(min-width: 768px)"
                              sizes="(min-width: 498px) 498px, 100vw"
                           />
                           <source
                              srcSet={`${BasketMob}, ${BasketMob2x} 2x`}
                              media="(max-width: 767px)"
                              sizes="(min-width: 259px) 259px, 100vw"
                           />
                           <img src={BasketMob} alt="No reecipe" />
                        </picture>
                        <EmptyText>Shopping list is empty. </EmptyText>
                     </BacketWrapper>
                  ) : (
                     shopping.items?.map((item) => {
                        return (
                           <StyledIngridientsItem key={item.ingredientId}>
                              <StyledImageCardThumb>
                                 <StyledImage
                                    src={item.ingredient.img}
                                    alt={item.desc}
                                    height="60"
                                 />
                                 <p>{item.ingredient.name}</p>
                              </StyledImageCardThumb>
                              <StyledFlexQuantity>
                                 <StyledFlexRow>
                                    {item.measure.split("/r/n").map((el) => (
                                       <StyledQuantity key={nanoid()}>
                                          <p>{el}</p>
                                       </StyledQuantity>
                                    ))}
                                 </StyledFlexRow>
                                 <StyledCloseIcon
                                    onClick={() => heandleDeleteButton(item.ingredientId)}
                                 />
                              </StyledFlexQuantity>
                           </StyledIngridientsItem>
                        );
                     })
                  )}
               </StyledListContainerIngridient>
            </>
         )}
      </StyledIngridientsContainer>
   );
};

export default IngredientsShoppingList;
