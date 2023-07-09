// import styled from 'styled-components';

// export const SharedLayoutWrapper = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

import styled from 'styled-components';
import leafsX1 from "../../images/Leafs/leafs@1x.webp";
import leafsX2 from "../../images/Leafs/leafs@2x.webp";


export const SharedLayoutWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const BackgroundImageLeft = styled.div`
  rotate: 149deg;
  position: absolute;
  left: -80px;
  bottom: 400px;
  height: 200px;
  width: 200px;
  filter: blur(2px);
  z-index: -1;
  background-image: url(${leafsX1});
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: auto 200px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:url(${leafsX2});
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    left: -100px;
    bottom: 340px;
    height: 270px;
    width: 270px;
    background-size: auto 270px;
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:url(${leafsX2});
  }
  }

  @media (min-width: 1440px) {
    left: -140px;
    bottom: 280px;
    height: 360px;
    width: 360px;
    background-size: auto 360px;
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:url(${leafsX2});
  }
  }
`;

export const BackgroundImageRight = styled.div`
rotate: -24deg;
position: absolute;
bottom: -55px;
right: -20px;
height: 180px;
width: 180px;
filter: blur(5px);
z-index: -1;
background-image: url(${leafsX1});
background-position: right bottom;
background-repeat: no-repeat;
background-size: auto 180px;
@media (min-device-pixel-ratio: 2),
(min-resolution: 192dpi),
(min-resolution: 2dppx) {
background-image:url(${leafsX2});
}
`;

export const BackgroundContent = styled.div`
  position: relative;
  z-index: 1;

`;