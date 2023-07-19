import styled from "styled-components";

export const Box = styled.div`
   position: absolute;
   right: 50px;
   top: 100%;
   transform: translateY(14px);
   z-index: 9;
   padding: 18px;
   background-color: var(--background-recipe-card);
   border-radius: 10px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   @media (min-width: 768px) {
   }
   @media (min-width: 1280px) {
      right: 0px;
   }
`;

export const Button = styled.button`
   width: 125px;
   height: 43px;
   text-align: center;
   line-height: 21px;
   letter-spacing: 0em;
   color: var(--text-light);
   background-color: var(--accent-color);
   border: 1px solid transparent;
   border-radius: 24px 44px;
`;
export const Profile = styled.p`
   display: flex;
   justify-content: space-between;
   font-weight: 500;
   font-size: 14px;
   line-height: 18px;
   color: var(--text-primary);
   cursor: pointer;

   transition: color 250ms var(--cubic-bezier);
   &:hover {
      color: var(--accent-color);
   }
   margin-bottom: 25px;
   @media (min-width: 768px) {
      margin-bottom: 40px;
   }
`;
