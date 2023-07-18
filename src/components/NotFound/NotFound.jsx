import React from "react";

import NotFoundDesk from "../../images/notFoundPage/notFoundDesk.webp";
import NotFoundMob from "../../images/notFoundPage/notFoundMob.webp";
import NotFoundTab from "../../images/notFoundPage/notFoundTab.webp";
import NotFoundDesk2x from "../../images/notFoundPage/notFoundDesk@2x.webp";
import NotFoundTab2x from "../../images/notFoundPage/notFoundTab@2x.webp";
import NotFoundMob2x from "../../images/notFoundPage/notFoundMob@2x.webp";
import NotFoundPic from "../../images/notFoundPage/notFound.png";

import { NotFoundContainer, NotFoundTitle, NotFoundText } from "./NotFound.styled";

const NotFound = ({ children }) => {
   return (
      <NotFoundContainer>
         <picture>
            <source
               srcSet={`${NotFoundDesk}, ${NotFoundDesk2x} 2x`}
               media="(min-width: 1280px)"
               sizes="(min-width: 498px) 498px, 100vw"
            />
            <source
               srcSet={`${NotFoundTab}, ${NotFoundTab2x} 2x`}
               media="(min-width: 768px)"
               sizes="(min-width: 498px) 498px, 100vw"
            />
            <source
               srcSet={`${NotFoundMob}, ${NotFoundMob2x} 2x`}
               media="(max-width: 767px)"
               sizes="(min-width: 259px) 259px, 100vw"
            />
            <img src={NotFoundPic} alt="Not found" />
         </picture>
         <NotFoundTitle>We are sorry,</NotFoundTitle>
         <NotFoundText>{children}</NotFoundText>
      </NotFoundContainer>
   );
};

export default NotFound;
