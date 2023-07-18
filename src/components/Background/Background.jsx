import React from "react";

import {
   SharedLayoutWrapper,
   BackgroundImageLeft,
   BackgroundImageRight,
} from "./Background.styled";

const Background = ({ children }) => {
   return (
      <SharedLayoutWrapper>
         {children}
         <BackgroundImageLeft />
         <BackgroundImageRight />
      </SharedLayoutWrapper>
   );
};

export default Background;
