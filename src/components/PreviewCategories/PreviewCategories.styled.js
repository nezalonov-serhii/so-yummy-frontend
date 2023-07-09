import styled from "styled-components";

export const CategoryList = styled.ul`
list-style: none;
display: flex;
justify-content: center;
@media (min-width: 768px) {
    justify-content: space-between;
}
`;

export const CategoryItem = styled.li`
color: #001833;
font-family: Poppins;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 28px;
letter-spacing: -0.56px;

@media (min-width: 768px) {
    font-size: 44px;
    line-height: 44px;
    letter-spacing: -0.88px;
}
`;

export const SeeAllButton = styled.button`
background-color: #EBF3D4;
color: #333;
margin-top: 24px;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
align-self: flex-end;
@media (min-width: 768px) {
    margin-top: 40px;
}
@media (min-width: 1440px) {
    margin-top: 50px;
}

`;

export const CategoryContainer = styled.div`
display: flex;
margin-top: 100px;
flex-direction: column;
justify-content: space-between;
`;

export const CategoryTitle = styled.h2`
font-family: Poppins;
font-size: 28px;
@media (min-width: 768px) {
    font-size: 44px;
}
`;

export const OtherCategoriesButton = styled.button`
  background-color: #EBF3D4;
  justify-content: center;
  margin-top: 14px;
  margin-bottom: 118px;
  color: #333;
  display: flex;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #DCE8B9;
  }
`;
