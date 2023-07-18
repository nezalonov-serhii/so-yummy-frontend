import styled from 'styled-components';

export const ProductCard = styled.div`
  position: relative;
  overflow: hidden;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 343px;
  height: 323px;
  flex-shrink: 0;
  cursor: pointer;
    @media (min-width: 768px) {
      width: 336px;
    }
    @media (min-width: 1280px) {
      width: 300px;
    }
`;

export const ProductImage = styled.img`
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
`;

export const ProductName = styled.h3`
display: flex;
align-items: center;
padding-left: 16px;
position: absolute;
border-radius: 8px;
bottom: 26px;
width: 307px;
height: 52px;
background-color: var(--background-primary);
color: var(--text-primary);
width: 307px;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.24px;
@media (min-width: 768px) {
  width: 300px;
}
@media (min-width: 1280px) {
  width: 268px;
}
`;