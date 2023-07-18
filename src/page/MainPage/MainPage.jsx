import React from "react";

import HeroMain from "../../components/HeroMain";
import ChooseYourBreakfast from "../../components/ChooseYourBreakfast";
import PreviewCategories from "../../components/PreviewCategories";

import { HeroMainContainer } from "./MainPage.styled";

const MainPage = () => {
   return (
      <HeroMainContainer>
         <HeroMain />
         <ChooseYourBreakfast />
         <PreviewCategories />
      </HeroMainContainer>
   );
};
export default MainPage;
