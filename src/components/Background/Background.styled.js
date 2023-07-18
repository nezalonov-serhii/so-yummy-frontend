import styled from "styled-components";

import leafsX1 from "../../images/Leafs/leafs@1x.webp";
import leafsX2 from "../../images/Leafs/leafs@2x.webp";

export const SharedLayoutWrapper = styled.div`
   position: relative;
   overflow: hidden;
`;

export const BackgroundImageLeft = styled.div`
   rotate: 149deg;
   position: absolute;

   left: -150px;
   bottom: 250px;
   height: 392px;
   width: 392px;
   filter: blur(4px) brightness(1.3);
   z-index: -1;
   background-image: url(${leafsX1});
   background-position: left bottom;
   background-repeat: no-repeat;
   background-size: auto 392px;
   @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${leafsX2});
   }
   @media (min-width: 768px) {
      left: -270px;
      bottom: 130px;
      height: 648px;
      width: 648px;
      background-size: auto 648px;
   }
   @media (min-width: 1280px) {
      left: -330px;
      bottom: 30px;
      height: 852px;
      width: 852px;
      background-size: auto 852px;
   }
`;

export const BackgroundImageRight = styled.div`
   rotate: -24deg;
   position: absolute;
   bottom: -45px;
   right: -20px;
   height: 172px;
   width: 172px;
   filter: blur(5px) brightness(1.3);
   z-index: -1;
   background-image: url(${leafsX1});
   background-position: right bottom;
   background-repeat: no-repeat;
   background-size: auto 172px;
   @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${leafsX2});
   }
   @media (min-width: 768px) {
      bottom: -100px;
      right: -30px;
      height: 313px;
      width: 313px;
      background-size: auto 313px;
   }
   @media (min-width: 1280px) {
      bottom: -150px;
      right: -18px;
      height: 474px;
      width: 474px;
      background-size: auto 474px;
   }
`;

export const Copyright = styled.div`
   display: inline-flex;
   align-items: flex-start;
   gap: 14px;
`;
