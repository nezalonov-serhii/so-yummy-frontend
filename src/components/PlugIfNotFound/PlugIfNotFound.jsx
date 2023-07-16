import React from "react";
import {
    PlugContainer,
    NotFoundText,
} from "./PlugIfNotFound.styled";

import VegetableBasketMob from "../../images/SearchPage/vegetableBasketMob.webp";
import VegetableBasketMob2x from "../../images/SearchPage/vegetableBasketMob@2x.webp";
import VegetableBasketTabDesk from "../../images/SearchPage/vegetableBasketTabDesk.webp";
import VegetableBasketTabDesk2x from "../../images/SearchPage/vegetableBasketTabDesk@2x.webp";
import VegetableBasket from "../../images/SearchPage/vegetable-fruit-basket.png";

const PlugIfNotFound = ({ children }) => {
    return (
      <PlugContainer>
        <picture>
          <source
            srcset={`${VegetableBasketTabDesk}, ${VegetableBasketTabDesk2x} 2x`}
            media="(min-width: 768px)"
            sizes="(min-width: 350px) 350px, 100vw"
          />
          <source
            srcset={`${VegetableBasketMob}, ${VegetableBasketMob2x} 2x`}
            media="(max-width: 767px)"
            sizes="(min-width: 208px) 208px, 100vw"
          />
          <img src={VegetableBasket} alt="Not found" />
        </picture>
        <NotFoundText> {children}</NotFoundText>
      </PlugContainer>
    );
}

export default PlugIfNotFound;