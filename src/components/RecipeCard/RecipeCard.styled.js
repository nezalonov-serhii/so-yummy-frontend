import styled from 'styled-components';

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 343px;
  height: 323px;
  flex-shrink: 0;
    @media (max-width: 768px) {
      width: 336px;
    }
    @media (min-width: 1440px) {
      width: 300px;
    }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`;

export const ProductName = styled.h3`
  margin: 16px;
`;