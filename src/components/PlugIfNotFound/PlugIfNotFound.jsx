import React from "react";

import VegetableBasketMob from "../../images/SearchPage/vegetable-fruit-basket-mob.png";
import VegetableBasketMob2x from "../../images/SearchPage/vegetable-fruit-basket-mob@2x.png";
import VegetableBasketTabDesk from "../../images/SearchPage/vegetable-fruit-basket-tab-desk.png";
import VegetableBasketTabDesk2x from "../../images/SearchPage/vegetable-fruit-basket-tab-desk@2x.png";
import VegetableBasket from "../../images/SearchPage/vegetable-fruit-basket.png";

import { PlugContainer, NotFoundText } from "./PlugIfNotFound.styled";

const PlugIfNotFound = ({ children }) => {
   return (
      <PlugContainer>
         <picture>
            <source
               srcSet={`${VegetableBasketTabDesk}, ${VegetableBasketTabDesk2x} 2x`}
               media="(min-width: 768px)"
               sizes="(min-width: 350px) 350px, 100vw"
            />
            <source
               srcSet={`${VegetableBasketMob}, ${VegetableBasketMob2x} 2x`}
               media="(max-width: 767px)"
               sizes="(min-width: 208px) 208px, 100vw"
            />
            <img src={VegetableBasket} alt="Not found" />
         </picture>
         <NotFoundText> {children}</NotFoundText>
      </PlugContainer>
   );
};

export default PlugIfNotFound;
