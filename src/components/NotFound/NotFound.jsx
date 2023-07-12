import React from "react";
import {
    NotFoundContainer,
    // NotFoundImg,
    NotFoundTitle,
    NotFoundText,
} from "./NotFound.styled";

import NotFoundDesk from "../../images/notFoundPage/notFoundDesk.webp";
import NotFoundMob from "../../images/notFoundPage/notFoundMob.webp";
import NotFoundTab from "../../images/notFoundPage/notFoundTab.webp";
// import NotFoundDesc2x from "../../images/notFoundPage/notFoundDesc@2x.png";


const NotFound = ({ children }) => {
  return (
    <NotFoundContainer>
      <picture>
        <source srcset={NotFoundDesk} media="(min-width: 1280px)" />
        <source srcset={NotFoundTab} media="(min-width: 768px)" />
        <img src={NotFoundMob} alt="Not found" />
      </picture>
      <NotFoundTitle>We are sorry,</NotFoundTitle>
      <NotFoundText>{children}</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;