import styled from "styled-components";

export const List = styled.ul`
   display: flex;
   flex-direction: row;
   width: 100%;
   overflow-x: auto;
   border-bottom: 1px solid rgba(224, 224, 224, 1);
   margin-bottom: 32px;
   padding-top: 50px;

   &::-webkit-scrollbar {
      display: none;
   }

   @media (min-width: 768px) {
      margin-bottom: 50px;
   }
   @media (min-width: 1280px) {
      margin-bottom: 50px;
      padding-top: 100px;
   }
`;

export const Item = styled.li`
   padding: 10px 0px 0px 29px;

   @media (min-width: 768px) {
      padding: 10px 0px 0px 30px;
   }

   &:not(:first-child) {
      @media (min-width: 768px) {
         margin-left: 25px;
      }

      @media (min-width: 1280px) {
         margin-left: 0;
         padding: 10px 0px 0px 10px;
      }
   }
`;

export const Button = styled.button`
   font-family: Poppins;
   border: none;
   font-weight: 400;
   padding-bottom: 29px;
   background-color: inherit;
   color: ${(props) =>
      props.isSelected ? "var( --button-background-primary)" : "rgba(224, 224, 224, 1)"};
   font-size: 14px;

   border-bottom: ${(props) =>
      props.isSelected ? " 2px solid var( --button-background-primary)" : "none"};

   transition: color 250ms var(--cubic-bezier);
   &:hover {
      color: var(--accent-color);
   }

   @media (min-width: 768px) {
      font-size: 18px;
      padding-bottom: 28px;
      color: ${(props) =>
         props.isSelected ? "var( --button-background-primary)" : "rgba(224, 224, 224, 1)"};
   }

   @media (min-width: 1280px) {
      font-size: 16px;
      padding-bottom: 28px;
      color: ${(props) =>
         props.isSelected ? "var( --button-background-primary)" : "rgba(224, 224, 224, 1)"};
   }
`;
