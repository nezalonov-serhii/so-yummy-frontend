import styled from "styled-components";

export const Wrapper = styled.div`
   margin-top: 72px;
   @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin-top: 100px;
      display: flex;
      gap: 32px;
   }
   @media screen and (min-width: 1280px) {
      display: flex;
      gap: 50px;
      margin-top: 100px;
   }
   @media screen and (min-width: 1280px) {
      margin-top: 0;
   }
`;

export const Container = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 24px;
   margin-top: 32px;
   padding-bottom: 23px;
   @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin-top: 0;
      padding-bottom: 0;
   }
   @media screen and (min-width: 1280px) {
      padding-bottom: 52px;
   }
`;

export const InputWrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: space-between;
   border-bottom: solid 1px #e0e0e0;
   ${({ hasError }) =>
      hasError &&
      `
    border: solid 1px red;
  `}
   &:active,
  &:focus,
  &:hover {
      outline: solid 2px rgb(241, 196, 15);
   }
`;

export const Input = styled.input`
   border: none;
   width: 100%;
   padding-bottom: 18px;
   color: var(--text-third);
   font-size: 14px;
   font-weight: 400;
   line-height: normal;
   letter-spacing: -0.28px;
   background-color: transparent;

   &::placeholder {
      color: var(--text-third);
   }

   &:active,
   &:focus,
   &:hover {
      outline: none;
   }
   @media screen and (min-width: 768px) {
      font-size: 16px;
      letter-spacing: -0.32px;
   }
`;

export const customStyles = {
   control: (baseStyles, state) => ({
      width: 160,
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
   }),
   menuList: (provided, state) => ({
      ...provided,
      padding: "8px 14px",
      maxHeight: "144px",
      backgroundColor: "transparent",
      "@media screen and (min-width: 768px) and (max-width: 1279px)": {
         maxHeight: "162px",
      },
   }),
   option: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      color: "black",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "-0.24px",
      margin: "4px 0",
      padding: "0px",
      "@media screen and (min-width: 768px) and (max-width: 1279px)": {
         fontSize: "14px",
         letterSpacing: "-0.28px",
      },
      // marginTop: "4px",
      // padding: "0px",
   }),
   valueContainer: (provided, state) => ({
      ...provided,
      justifyContent: "flex-end",
   }),
   dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "var(--accent-color)",
   }),
};
