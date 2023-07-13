import React from "react";
import {
    NotFoundContainer,
    NotFoundTitle,
    NotFoundText,
} from "./NotFound.styled";

import NotFoundDesk from "../../images/notFoundPage/notFoundDesk.webp";
import NotFoundMob from "../../images/notFoundPage/notFoundMob.webp";
import NotFoundTab from "../../images/notFoundPage/notFoundTab.webp";
import NotFoundDesk2x from "../../images/notFoundPage/notFoundDesk@2x.webp";
import NotFoundTab2x from "../../images/notFoundPage/notFoundTab@2x.webp"
import NotFoundMob2x from "../../images/notFoundPage/notFoundMob@2x.webp";

const NotFound = ({ children }) => {
  return (
    <NotFoundContainer>
      <picture>
        <source
          srcset={`${NotFoundDesk}, ${NotFoundDesk2x} 2x`}
          media="(min-width: 1280px)"
        />
        <source
          srcset={`${NotFoundTab}, ${NotFoundTab2x} 2x`}
          media="(min-width: 768px)"
        />
        <img src={`${NotFoundMob}, ${NotFoundMob2x} 2x`} alt="Not found" />
      </picture>
      <NotFoundTitle>We are sorry,</NotFoundTitle>
      <NotFoundText>{children}</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;