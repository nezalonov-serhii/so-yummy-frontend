import React from "react";
import { Rights } from "../Footer/Rights/Rights";
import { SharedLayoutWrapper,
        BackgroundImageLeft,
        BackgroundImageRight
       } from "./Background.styled"

const Background = ({ children }) => {
    
    return (
       <SharedLayoutWrapper>
        { children }
          <BackgroundImageLeft />
          <BackgroundImageRight /> 
          {/* <Rights /> */}
       </SharedLayoutWrapper>
    );
 };
 
 export default Background;