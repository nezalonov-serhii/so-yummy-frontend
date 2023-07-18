import React from "react";

import { useScreenWidth } from "../../hooks";

import {
   SeeRecipe,
   TextSeeRecipe,
   SpanSeeRecipe,
   TextLink,
   IconSpanTextLink,
} from "./ChooseYourBreakfast.styled";

const ChooseYourBreakfast = () => {
   const { mobile } = useScreenWidth();

   return (
      <>
         <SeeRecipe>
            {mobile && (
               <TextSeeRecipe>
                  <SpanSeeRecipe>Delicious and healthy</SpanSeeRecipe> way to enjoy
                  <br />
                  a variety of fresh ingredients in one
                  <br />
                  satisfying meal
               </TextSeeRecipe>
            )}
            {!mobile && (
               <TextSeeRecipe>
                  <SpanSeeRecipe>Delicious and healthy</SpanSeeRecipe> way to
                  <br />
                  enjoy a variety of fresh ingredients
                  <br />
                  in one satisfying meal
               </TextSeeRecipe>
            )}
            <TextLink to="/categories/breakfast">
               See recipes
               <IconSpanTextLink aria-label="go to breakfast" />
            </TextLink>
         </SeeRecipe>
      </>
   );
};

export default ChooseYourBreakfast;
